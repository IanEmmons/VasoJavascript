'use strict';

// Presentation of gold medal bids
// Ranking schools within a tournament
// Who goes to states?
// Who goes to states with exhibition status?
// School trophy presentation

function KnackAppInfo() {
	this.isDivA = function() {
		return false;
		//return true;
	}.bind(this);

	this.isDivBC = function() {
		return !this.isDivA();
	}.bind(this);

	if (this.isDivA()) {
		this.apiKey = 'c50f65dc-363f-4022-95c2-e98a0c89fd97';

		// Event RankUpdater
		this.lockEventFinalizeView = 'view_1531';

		// Presenter
		this.presenterUpperLevelSceneIds = [
			'scene_587',	// Event selection scene
		];

		// Event Presenter
		this.presenterEventGrid = 'view_1442';
		this.presenterEventNextBtnViewId = 'view_1470';
		this.presenterEventAwardSceneId = 'scene_589';
		this.presenterEventIconViewId = 'view_1440';
	} else if (this.isDivBC()) {
		this.apiKey = '539b2e01-8b10-4388-b5a7-22dd644e9e2d';

		// Event RankUpdater
		this.lockEventFinalizeView = 'view_1609';

		// Div. B Overview RankUpdater
		this.overviewBTeamGrid = 'view_1578';
		this.overviewBSchoolGrid = 'view_1384';
		this.overviewBLockSceneId = 'scene_624';
		this.overviewBLockGrid = 'view_1585';
		this.overviewBSubmitForm = 'view_1586';
		this.overviewBFinalizeView = 'view_1629';

		// Div. C Overview RankUpdater
		this.overviewCTeamGrid = 'view_1581';
		this.overviewCSchoolGrid = 'view_1387';
		this.overviewCLockSceneId = 'scene_629';
		this.overviewCLockGrid = 'view_1633';
		this.overviewCSubmitForm = 'view_1634';
		this.overviewCFinalizeView = 'view_1635';

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

		// School Winners C Presenter
		this.presenterSchoolCGrid = 'view_1551';
		this.presenterSchoolCNextBtnViewId = 'view_1554';
		this.presenterSchoolCAwardSceneId = 'scene_612';

		// School Winners BC Presenter
		this.presenterSchoolBCGrid = 'view_1555 view_1556';
		this.presenterSchoolBCNextBtnViewId = 'view_1558';
		this.presenterSchoolBCAwardSceneId = 'scene_613';
		this.presenterSchoolBCIconViewId = '';
	}

	// RankUpdater
	this.esScoringGrid = 'view_1375';
	this.scoremasterEventGrid = 'view_1363';
	this.lockEventSceneId = 'scene_563';
	this.lockEventGrid = 'view_1380';
	this.lockEventSubmitForm = 'view_1382';

	this.eventScoreTableId = 'object_95';			// 'Raw Scores' table
	this.eventAdjScoreFieldId = 'field_1736';		// 'Raw Scores/Tier Adjusted Score' column
	this.eventRankFieldId = 'field_1737';			// 'Raw Scores/Rank' column
	this.eventStatusFieldId = 'field_1731';		// 'Raw Scores/Event Special Status' column

	this.teamTableId = 'object_80';					// 'Teams' table
	this.teamAdjScoreFieldId = 'field_1760';		// 'Teams/Tie-Adj Overall Score' column
	this.teamRankFieldId = 'field_1900';			// 'Teams/Rank' column

	this.schoolTableId = 'object_5';					// 'School' table
	this.schoolBAdjScoreFieldId = 'field_1763';	// 'School/Reg: Best B Tie-Adj Score' column
	this.schoolCAdjScoreFieldId = 'field_1764';	// 'School/Reg: Best C Tie-Adj Score' column
	this.schoolBRankFieldId = 'field_1938';		// 'School/Reg: B Rank' column
	this.schoolCRankFieldId = 'field_1939';		// 'School/Reg: C Rank' column

	// Presenter
	this.awardBackgroundUrl = 'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg';
	this.teamNameFieldId = 'field_1202';			// 'Teams/Award Ceremony Team Name' column
	this.schoolNameFieldId = 'field_1862';			// 'School/Award Ceremony Name' column
	this.eventIconFieldId = 'field_1712';
}

const appInfo = new KnackAppInfo();

function RankUpdater(gridId, sceneId, lockSubmitForm, finalizeBtnViewId,
		scoreFieldId, rankFieldId, statusFieldId, tableId, isInEventMode) {
	this.gridId = gridId;
	this.sceneId = sceneId;
	this.lockSubmitForm = lockSubmitForm;
	this.finalizeBtnViewId = finalizeBtnViewId;
	this.scoreFieldId = scoreFieldId;
	this.rawScoreFieldId = this.scoreFieldId + '_raw';
	this.rankFieldId = rankFieldId;
	this.rawRankFieldId = this.rankFieldId + '_raw';
	this.statusFieldId = statusFieldId;
	this.rawStatusFieldId = this.statusFieldId + '_raw';
	this.tableId = tableId;
	this.isInEventMode = isInEventMode;
	this.scoreInfoMap = null;
	this.rankStorageInProgress = false;

	this.getStatus = function(model) {
		if (this.statusFieldId) {
			const statusField = model.attributes[this.rawStatusFieldId];
			return (statusField.length > 0)
				? statusField[0].identifier
				: '';
		} else {
			return '';
		}
	}.bind(this);

	this.createScoreInfo = function(scoreInfoMap, model) {
		const scoreInfo = {
				adjScore: model.attributes[this.rawScoreFieldId],
				status: this.getStatus(model),
				oldRank: model.attributes[this.rawRankFieldId],
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
			.map((model) => model.attributes[this.rawScoreFieldId])
			.sort((lhs, rhs) => this.isInEventMode ? (rhs - lhs) : (lhs - rhs));
		for (const [, scoreInfo] of scoreInfoMap) {
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
		for (const [, scoreInfo] of scoreInfoMap) {
			this.incrementRankCount(rankHistogram, scoreInfo.newRank);
		}

		for (const [id, scoreInfo] of scoreInfoMap) {
			const bgColor = this.getBgColor(scoreInfo.newRank, numTeams, rankHistogram);
			$(`div#${gridId} tr#${id} > td.${this.rankFieldId}`).css('background', bgColor);
			$(`div#${gridId} tr#${id} > td.${this.rankFieldId} > span`).text(`${scoreInfo.newRank}`);
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
		const url = `https://api.knack.com/v1/objects/${this.tableId}/records/${id}`;
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
				[this.rankFieldId]: newRank,
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
		if (this.rankStorageInProgress) {
			return false;
		}
		$(`#${this.lockSubmitForm} div#kn-input-`).show();	// Result report - Please Wait
		this.setSpinner();
		this.rankStorageInProgress = true;
		this.putRanksToDatabase(this.scoreInfoMap)
			.then(() => {
				console.log('Database updates for ranking succeeded');
				$(`#${this.lockSubmitForm} div#kn-input- h3.kn-title`).text('Success!');
				const label = this.isInEventMode ? 'event' : 'tournament';
				$(`#${this.lockSubmitForm} div#kn-input- p.kn-description`).html(`
					The scores and ranks have been finalized. Press the button to<br/>
					lock the ${label} and submit it for presentation.`);
				$(`div#${this.finalizeBtnViewId}`).hide();		// Finalize button
				$(`#${this.lockSubmitForm} div.kn-submit`).show();	// Submit button
				this.cancelSpinner();
				this.rankStorageInProgress = false;
			})
			.catch((error) => {
				console.error(`PUT failure: ${error.message}`);
				$(`#${this.lockSubmitForm} div#kn-input- h3.kn-title`).text('An error occurred');
				$(`#${this.lockSubmitForm} div#kn-input- p.kn-description`).html(`
					Please wait a moment or two and press the Finalize button again.
					<br/><br/>Error message: ${error.message}`);
				this.cancelSpinner();
				this.rankStorageInProgress = false;
			});
		return false;
	}.bind(this);

	this.rankUpdateHandler = function(/* event, view, record*/) {
		this.scoreInfoMap = this.computeScoreInfoMap();
		this.updateTeamRanks(this.scoreInfoMap);
	}.bind(this);

	this.sceneRenderHandler = function(/* event, view, record*/) {
		$(`#${this.gridId}`).hide();	// Scores table needed only to force data retrieval
		$(`#${this.lockSubmitForm} div#kn-input-`).hide();	// Result report
		$(`#${this.lockSubmitForm} div.kn-submit`).hide();	// Submit button
		$(`div#${this.finalizeBtnViewId} svg`).on('click', this.finalizeBtnClickHandler);
	}.bind(this);

	if (this.sceneId && this.lockSubmitForm && this.finalizeBtnViewId) {
		$(document).on(`knack-scene-render.${this.sceneId}`, this.sceneRenderHandler);
	}
	$(document).on(`knack-view-render.${this.gridId}`, this.rankUpdateHandler);
	$(document).on(`knack-cell-update.${this.gridId}`, this.rankUpdateHandler);
}

const esUpdater = new RankUpdater(appInfo.esScoringGrid, '', '', '',
	appInfo.eventAdjScoreFieldId, appInfo.eventRankFieldId, appInfo.eventStatusFieldId, '', true);
const scoremasterEventUpdater = new RankUpdater(appInfo.scoremasterEventGrid, '', '', '',
	appInfo.eventAdjScoreFieldId, appInfo.eventRankFieldId, appInfo.eventStatusFieldId, '', true);
const lockEventUpdater = new RankUpdater(appInfo.lockEventGrid, appInfo.lockEventSceneId,
	appInfo.lockEventSubmitForm, appInfo.lockEventFinalizeView,
	appInfo.eventAdjScoreFieldId, appInfo.eventRankFieldId, appInfo.eventStatusFieldId,
	appInfo.eventScoreTableId, true);

const overviewBTeamUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewBTeamGrid, '', '', '',
	appInfo.teamAdjScoreFieldId, appInfo.teamRankFieldId, '', '', false);
const overviewBSchoolUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewBSchoolGrid, '', '', '',
	appInfo.schoolBAdjScoreFieldId, appInfo.schoolBRankFieldId, '', '', false);
const overviewBLockUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewBLockGrid, appInfo.overviewBLockSceneId,
	appInfo.overviewBSubmitForm, appInfo.overviewBFinalizeView,
	appInfo.schoolBAdjScoreFieldId, appInfo.schoolBRankFieldId, '',
	appInfo.schoolTableId, false);

const overviewCTeamUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewCTeamGrid, '', '', '',
	appInfo.teamAdjScoreFieldId, appInfo.teamRankFieldId, '', '', false);
const overviewCSchoolUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewCSchoolGrid, '', '', '',
	appInfo.schoolCAdjScoreFieldId, appInfo.schoolCRankFieldId, '', '', false);
const overviewCLockUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewCLockGrid, appInfo.overviewCLockSceneId,
	appInfo.overviewCSubmitForm, appInfo.overviewCFinalizeView,
	appInfo.schoolCAdjScoreFieldId, appInfo.schoolCRankFieldId, '',
	appInfo.schoolTableId, false);



// ====================================================================

function Presenter(awardGrid, nextBtnViewId, awardSceneId, iconViewId, upperLevelSceneIds,
		iconFieldId, awardeeNameFieldId, rankFieldId) {
	this.awardGrid = awardGrid;
	this.nextBtnViewId = nextBtnViewId;
	this.awardSceneId = awardSceneId;
	this.iconViewId = iconViewId;
	this.upperLevelSceneIds = upperLevelSceneIds;
	this.iconFieldId = iconFieldId;
	this.rawIconFieldId = this.iconFieldId + '_raw';
	this.awardeeNameFieldId = awardeeNameFieldId;
	this.rawAwardeeNameFieldId = this.awardeeNameFieldId + '_raw';
	this.rankFieldId = rankFieldId;
	this.rawRankFieldId = this.rankFieldId + '_raw';

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
			const eventIconUrl = Knack.models[this.iconViewId].attributes[this.rawIconFieldId];
			const cssImageValue = `url("${eventIconUrl}"), url("${appInfo.awardBackgroundUrl}")`;
			this.setBackground(cssImageValue, 'no-repeat, no-repeat', '150px 150px, contain',
				'top 40px right 50px, top left');

			// Hide Knack's icon:
			$(`div#${this.iconViewId} div.${this.iconFieldId}_thumb_1`).hide();
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
			const awardeeFieldId = this.awardeeNameFieldId;
			const spanElement = $(`div#${viewId} tr#${medal.id} > td.${awardeeFieldId} > span`);
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
			const rawRank = models[i].attributes[this.rawRankFieldId];
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
			const rawRank = models[i].attributes[this.rawRankFieldId];
			const rank = Number(rawRank);
			if (rawRank && !isNaN(rank)) {
				const medalInfo = {
					id: models[i].attributes.id,
					rank: rank,
					awardeeName: models[i].attributes[this.rawAwardeeNameFieldId],
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
			const rankFieldId = this.rankFieldId;
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
	appInfo.presenterEventIconViewId, appInfo.presenterUpperLevelSceneIds,
	appInfo.eventIconFieldId, appInfo.teamNameFieldId, appInfo.eventRankFieldId);
const schoolBPresenter = appInfo.isDivA() ? null : new Presenter(
	appInfo.presenterSchoolBGrid, appInfo.presenterSchoolBNextBtnViewId,
	appInfo.presenterSchoolBAwardSceneId, '', null, '',
	appInfo.schoolNameFieldId, appInfo.schoolBRankFieldId);
const schoolCPresenter = appInfo.isDivA() ? null : new Presenter(
	appInfo.presenterSchoolCGrid, appInfo.presenterSchoolCNextBtnViewId,
	appInfo.presenterSchoolCAwardSceneId, '', null, '',
	appInfo.schoolNameFieldId, appInfo.schoolCRankFieldId);
