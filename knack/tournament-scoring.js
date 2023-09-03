'use strict';

// Presentation of gold medal bids
// Ranking schools within a tournament
// Who goes to states?
// Who goes to states with exhibition status?
// School trophy presentation

function KnackAppInfo(appName) {
	if (appName === 'DivA Scoring App') {
		this.apiKey = 'c50f65dc-363f-4022-95c2-e98a0c89fd97';

		// Presenter
		this.presenterUpperLevelSceneIds = [
			'scene_587',	// Event selection scene
		];

		// Event Presenter
		this.presenterEventGrid = 'view_1442';
		this.presenterEventIconViewId = 'view_1440';
		this.presenterEventNextBtnViewId = 'view_1470';
	} else if (appName === 'DivBC Scoring App') {
		this.apiKey = '539b2e01-8b10-4388-b5a7-22dd644e9e2d';

		// Presenter
		this.presenterUpperLevelSceneIds = [
			'scene_587',	// Tournament selection scene
			'scene_605'		// Event selection scene
		];

		// Event Presenter
		this.presenterEventGrid = 'view_1522';
		this.presenterEventNextBtnViewId = 'view_1545';
		this.presenterEventAwardSceneId = 'scene_606';
		this.presenterEventIconViewId = 'view_1521';

		// School Winners B Presenter
		this.presenterSchoolBGrid = 'view_1549';
		this.presenterSchoolBNextBtnViewId = 'view_1553';
		this.presenterSchoolBAwardSceneId = 'scene_611';
		this.presenterSchoolBIconViewId = '';

		// School Winners C Presenter
		this.presenterSchoolCGrid = 'view_1551';
		this.presenterSchoolCNextBtnViewId = 'view_1554';
		this.presenterSchoolCAwardSceneId = 'scene_612';
		this.presenterSchoolCIconViewId = '';

		// School Winners BC Presenter
		this.presenterSchoolBCGrid = 'view_1555 view_1556';
		this.presenterSchoolBCNextBtnViewId = 'view_1558';
		this.presenterSchoolBCAwardSceneId = 'scene_613';
		this.presenterSchoolBCIconViewId = '';
	}

	// RankUpdater
	this.rawScoreTableId = 'object_95';
	this.esScoringSceneId = 'scene_560';
	this.esScoringGrid = 'view_1375';
	this.scoremasterEventSceneId = 'scene_550';
	this.scoremasterEventGrid = 'view_1363';
	this.lockEventSceneId = 'scene_563';
	this.lockEventGrid = 'view_1380';
	this.lockEventSubmitForm = 'view_1382';
	this.lockEventFinalizeView = 'view_1609';
	this.tierAdjScoreFieldId = 'field_1736';
	this.rankFieldId = 'field_1737';
	this.statusFieldId = 'field_1731';

	// Presenter
	this.awardBackgroundUrl = 'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg';
	this.teamNameFieldId = 'field_1202';
	this.iconFieldId = 'field_1712';

	// Computed values:
	this.rawRankFieldId = this.rankFieldId + '_raw';
	this.rawTierAdjScoreFieldId = this.tierAdjScoreFieldId + '_raw';
	this.rawStatusFieldId = this.statusFieldId + '_raw';
	this.rawTeamNameFieldId = this.teamNameFieldId + '_raw';
	this.rawIconFieldId = this.iconFieldId + '_raw';
}

//const appInfo = new KnackAppInfo('DivA Scoring App');
const appInfo = new KnackAppInfo('DivBC Scoring App');

function RankUpdater(sceneId, gridId, lockSubmitForm, finalizeBtnViewId) {
	this.sceneId = sceneId;
	this.gridId = gridId;
	this.lockSubmitForm = lockSubmitForm;
	this.finalizeBtnViewId = finalizeBtnViewId;
	this.scoreInfoMap = null;

	this.createScoreInfo = function(scoreInfoMap, model) {
		const statusField = model.attributes[appInfo.rawStatusFieldId];
		const status = (statusField.length > 0)
			? statusField[0].identifier
			: '';
		const scoreInfo = {
				adjScore: model.attributes[appInfo.rawTierAdjScoreFieldId],
				status: status,
				oldRank: model.attributes[appInfo.rawRankFieldId],
				newRank: -1,
			};
		scoreInfoMap.set(model.attributes.id, scoreInfo);
	}.bind(this);

	this.setRank = function(scoreInfo, numTeams, sortedScores) {
		if (scoreInfo.status === 'Participation Points Only') {
			scoreInfo.newRank = numTeams;
		} else if (scoreInfo.status === 'No Show') {
			scoreInfo.newRank = numTeams + 1;
		} else if (scoreInfo.status === 'Disqualification') {
			scoreInfo.newRank = numTeams + 2;
		} else {
			scoreInfo.newRank = sortedScores.indexOf(scoreInfo.adjScore) + 1;
		}
	}.bind(this);

	this.computeScoreInfoMap = function() {
		const models = Knack.models[this.gridId].data.models;
		const numTeams = models.length;
		console.log('Grid row models:');
		console.log(models);

		const scoreInfoMap = new Map();
		models.forEach(
			(model) => this.createScoreInfo(scoreInfoMap, model));

		const sortedScores = models.slice()
			.map((model) => model.attributes[appInfo.rawTierAdjScoreFieldId])
			.sort((lhs, rhs) => (rhs - lhs));
		for (const [id, scoreInfo] of scoreInfoMap) {
			this.setRank(scoreInfo, numTeams, sortedScores);
		}

		console.log('Score info map:');
		console.log(scoreInfoMap);
		return scoreInfoMap;
	}.bind(this);

	this.incrementRankCount = function(rankHistogram, rank) {
		if (rankHistogram.has(rank)) {
			rankHistogram.set(rank, rankHistogram.get(rank) + 1);
		} else {
			rankHistogram.set(rank, 1);
		}
	}.bind(this);

	this.getBgColor = function(rank, numTeams, rankHistogram) {
		if (rank < numTeams && rankHistogram.get(rank) > 1) {
			return '#b8d3bc';	// colored when tied
		} else {
			return '#ffffff';	// white when there is no tie
		}
	}.bind(this);

	this.updateTeamRanks = function(scoreInfoMap) {
		const numTeams = scoreInfoMap.size;

		const rankHistogram = new Map();
		for (const [id, scoreInfo] of scoreInfoMap) {
			this.incrementRankCount(rankHistogram, scoreInfo.newRank);
		}

		for (const [id, scoreInfo] of scoreInfoMap) {
			const bgColor = this.getBgColor(scoreInfo.newRank, numTeams, rankHistogram);
			$(`div#${gridId} tr#${id} > td.${appInfo.rankFieldId}`).css('background', bgColor);
			$(`div#${gridId} tr#${id} > td.${appInfo.rankFieldId} > span`).text(`${scoreInfo.newRank}`);
		}
	}.bind(this);

	this.sleep = function(timeInMillis) {
		return new Promise(resolve => setTimeout(resolve, timeInMillis));
	}.bind(this);

	this.setSpinner = function() {
		// Show a spinner after a third of a second:
		setTimeout(() => Knack.showSpinner(), 333);
	}.bind(this);

	this.cancelSpinner = function() {
		// For immediate effect:
		Knack.hideSpinner();
		// To ensure cancel in cases where we reach the line above before
		// the preceeding setSpinner() call's 333 milliseconds has expired:
		setTimeout(() => Knack.hideSpinner(), 500);
	}.bind(this);

	this.putRankToDatabase = async function(id, newRank) {
		const url = `https://api.knack.com/v1/objects/${appInfo.rawScoreTableId}/records/${id}`;
		const options = {
			method: 'PUT',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
				'X-Knack-Application-Id': Knack.application_id,
				'X-Knack-REST-API-KEY': appInfo.apiKey,
				//'Authorization': Knack.getUserToken(),
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				[appInfo.rankFieldId]: newRank,
			}),
		};
		const response = await fetch(url, options);

		console.log(`HTTP response code ${response.status}`);
		if (!response.ok) {
			console.log(`URL: ${url}`);
			console.log(`Options: ${JSON.stringify(options), '  '}`);
			throw new Error(`HTTP response code ${response.status}`);
		}

		//const result = await response.json();
		//console.log(`Success: ${JSON.stringify(result)}`);

		return this.sleep(100);	// milliseconds - prevents overrunning the Knack API limits
	}.bind(this);

	this.putRanksToDatabase = async function(scoreInfoMap) {
		for (const [id, scoreInfo] of scoreInfoMap) {
			if (scoreInfo.newRank === scoreInfo.oldRank) {
				continue;
			}
			await this.putRankToDatabase(id, scoreInfo.newRank);
		}
	}.bind(this);

	this.finalizeBtnClickHandler = function() {
		$(`#${this.lockSubmitForm} div#kn-input-`).show();	// Result report - Please Wait
		this.setSpinner();
		this.putRanksToDatabase(this.scoreInfoMap)
			.then(() => {
				console.log('Database updates for ranking succeeded');
				$(`#${this.lockSubmitForm} div#kn-input- h3.kn-title`).text('Success!');
				$(`#${this.lockSubmitForm} div#kn-input- p.kn-description`).html(`
					The event scores have been finalized. Press the button to<br/>
					lock the event and return to the ScoreMaster home page.`);
				$(`div#${this.finalizeBtnViewId}`).hide();		// Finalize button
				$(`#${this.lockSubmitForm} div.kn-submit`).show();	// Submit button
				this.cancelSpinner();
			})
			.catch((error) => {
				console.error(`PUT failure: ${error.message}`);
				$(`#${this.lockSubmitForm} div#kn-input- h3.kn-title`).text('An error occurred');
				$(`#${this.lockSubmitForm} div#kn-input- p.kn-description`).html(`
					Please wait a moment or two and press the Finalize button again.
					<br/><br/>Error message: ${error.message}`);
				this.cancelSpinner();
			});
		return false;
	}.bind(this);

	this.rankUpdateHandler = function(/* event, view, record*/) {
		this.scoreInfoMap = this.computeScoreInfoMap();
		this.updateTeamRanks(this.scoreInfoMap);
	}.bind(this);

	this.sceneRenderHandler = function(/* event, view, record*/) {
		if (this.lockSubmitForm && this.finalizeBtnViewId) {
			$(`#${this.gridId}`).hide();	// Scores table needed only to force data retrieval
			$(`#${this.lockSubmitForm} div#kn-input-`).hide();	// Result report
			$(`#${this.lockSubmitForm} div.kn-submit`).hide();	// Submit button
			$(`div#${this.finalizeBtnViewId} svg`).on('click', this.finalizeBtnClickHandler);
		}
	}.bind(this);

	$(document).on(`knack-scene-render.${this.sceneId}`, this.sceneRenderHandler);
	$(document).on(`knack-view-render.${this.gridId}`, this.rankUpdateHandler);
	$(document).on(`knack-cell-update.${this.gridId}`, this.rankUpdateHandler);
}

const esUpdater = new RankUpdater(appInfo.esScoringSceneId, appInfo.esScoringGrid, '', '');
const scoremasterEventUpdater = new RankUpdater(appInfo.scoremasterEventSceneId,
	appInfo.scoremasterEventGrid, '', '');
const lockEventUpdater = new RankUpdater(appInfo.lockEventSceneId, appInfo.lockEventGrid,
	appInfo.lockEventSubmitForm, appInfo.lockEventFinalizeView);



// ====================================================================

function Presenter(awardGrid, nextBtnViewId, awardSceneId, iconViewId, upperLevelSceneIds) {
	this.awardGrid = awardGrid;
	this.nextBtnViewId = nextBtnViewId;
	this.awardSceneId = awardSceneId;
	this.iconViewId = iconViewId;
	this.upperLevelSceneIds = upperLevelSceneIds;
	this.medals = null;
	this.numRanksShowing = 0;

	this.medalLabels = [
		'Zeroth Place:',
		'First Place:',
		'Second Place:',
		'Third Place:',
		'Fourth Place:',
		'Fifth Place:',
		'Sixth Place:',
		'Seventh Place:',
		'Eighth Place:',
		'Ninth Place:',
		'Tenth Place:',
		'Eleventh Place:',
		'Twelfth Place:',
	];

	this.setBackground = function(image, repeat, size, position) {
		const mainDiv = $('div#knack-dist_1 > div.kn-scenes.kn-section');
		mainDiv.css('background-image', image);
		mainDiv.css('background-repeat', repeat);
		mainDiv.css('background-size', size);
		mainDiv.css('background-position', position);
	}.bind(this);

	this.awardSceneRenderHandler = function(/*event, view, record*/) {
		if (this.iconViewId) {
			const eventIconUrl = Knack.models[this.iconViewId].attributes[appInfo.rawIconFieldId];
			const cssImageValue = `url("${eventIconUrl}"), url("${appInfo.awardBackgroundUrl}")`;
			this.setBackground(cssImageValue, 'no-repeat, no-repeat', '150px 150px, contain',
				'top 40px right 50px, top left');

			// Hide Knack's icon:
			$(`div#${this.iconViewId} div.${appInfo.iconFieldId}_thumb_1`).hide();
		} else {
			const cssImageValue = `url("${appInfo.awardBackgroundUrl}")`;
			this.setBackground(cssImageValue, 'no-repeat', 'contain', 'top left');
		}
	}.bind(this);

	this.eventListSceneEventHandler = function(/*event, view, record*/) {
		this.setBackground('', '', '', '');
	}.bind(this);

	this.setTeamNameVisibilities = function() {
		for (let i = 0; i < this.medals.length; ++i) {
			const viewId = this.awardGrid;
			const medal = this.medals[i];
			const teamFieldId = appInfo.teamNameFieldId;
			const spanElement = $(`div#${viewId} tr#${medal.id} > td.${teamFieldId} > span`);
			if (i < this.medals.length - this.numRanksShowing) {
				spanElement.hide();
			} else {
				spanElement.show();
			}
		}
	}.bind(this);

	this.nextBtnClickHandler = function() {
		if (!this.medals) {
			return;
		}
		++this.numRanksShowing;
		this.setTeamNameVisibilities();
		return false;
	}.bind(this);

	this.nextBtnRenderHandler = function(/*event, view, record*/) {
		$(`div#${this.nextBtnViewId} svg`).on('click', this.nextBtnClickHandler);
	}.bind(this);

	this.getMedalList = function() {
		const models = Knack.models[this.awardGrid].data.models;

		console.log('Presentation grid row models:');
		console.log(models);

		let minRank = Number.MAX_SAFE_INTEGER;
		let maxRank = Number.MIN_SAFE_INTEGER;
		for (let i = 0; i < models.length; ++i) {
			const rawRank = models[i].attributes[appInfo.rawRankFieldId];
			const rank = Number(rawRank);
			if (rawRank && !isNaN(rank)) {
				minRank = Math.min(minRank, rank);
				maxRank = Math.max(maxRank, rank);
			}
		}

		if (minRank === Number.MAX_SAFE_INTEGER) {
			return Array(0);
		}

		const medals = Array(maxRank - minRank + 1);
		for (let i = 0; i < models.length; ++i) {
			const rawRank = models[i].attributes[appInfo.rawRankFieldId];
			const rank = Number(rawRank);
			if (rawRank && !isNaN(rank)) {
				const medalInfo = {
					id: models[i].attributes.id,
					rank: rank,
					teamName: models[i].attributes[appInfo.rawTeamNameFieldId],
				};
				if (medals[medalInfo.rank - minRank]) {
					throw 'Two teams have the same medal position';
				}
				medals[medalInfo.rank - minRank] = medalInfo;
			}
		}

		console.log('Medal array:');
		console.log(medals);
		return medals;
	}.bind(this);

	this.gridRenderHandler = function(/*event, view, record*/) {
		this.medals = this.getMedalList();

		// Hide the table page navigation and table header:
		$(`div#${this.awardGrid} thead`).hide();
		$(`div#${this.awardGrid} div.kn-records-nav`).hide();

		// Replace ranks numbers with place names:
		for (let i = 0; i < this.medals.length; ++i) {
			const viewId = this.awardGrid;
			const medal = this.medals[i];
			const rankFieldId = appInfo.rankFieldId;
			const spanElement = $(`div#${viewId} tr#${medal.id} > td.${rankFieldId} > span`);
			spanElement.text(`${this.medalLabels[medal.rank]}`);
		}

		// Hide the team names:
		this.numRanksShowing = 0;
		this.setTeamNameVisibilities();
	}.bind(this);

	$(document).on(`knack-view-render.${this.awardGrid}`, this.gridRenderHandler);
	$(document).on(`knack-view-render.${this.nextBtnViewId}`, this.nextBtnRenderHandler);
	$(document).on(`knack-scene-render.${this.awardSceneId}`, this.awardSceneRenderHandler);
	if (this.upperLevelSceneIds) {
		for (let i = 0; i < this.upperLevelSceneIds.length; ++i) {
			$(document).on(`knack-scene-render.${this.upperLevelSceneIds[i]}`,
				this.eventListSceneEventHandler);
		}
	}
}

const eventPresenter = new Presenter(appInfo.presenterEventGrid,
	appInfo.presenterEventNextBtnViewId, appInfo.presenterEventAwardSceneId,
	appInfo.presenterEventIconViewId, appInfo.presenterUpperLevelSceneIds);
const schoolBPresenter = new Presenter(appInfo.presenterSchoolBGrid,
	appInfo.presenterSchoolBNextBtnViewId, appInfo.presenterSchoolBAwardSceneId,
	appInfo.presenterSchoolBIconViewId, null);
const schoolCPresenter = new Presenter(appInfo.presenterSchoolCGrid,
	appInfo.presenterSchoolCNextBtnViewId, appInfo.presenterSchoolCAwardSceneId,
	appInfo.presenterSchoolCIconViewId, null);
