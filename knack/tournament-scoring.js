'use strict';

// Presenting gold bids (at regionals)
// Presenting who goes to states (at regionals)
// Presenting state medals with exhibition teams included

function KnackAppInfo() {
	this.isDivA = function() {
		return false;
		//return true;
	}.bind(this);

	this.isDivBC = function() {
		return !this.isDivA();
	}.bind(this);

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

	// Award Background
	this.presenterTournamentSelectionSceneId = 'scene_587';
	this.awardBackgroundUrl = 'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg';
	this.eventIconFieldId = 'field_1712';

	// Presenter
	this.teamNameFieldId = 'field_1202';			// 'Teams/Award Ceremony Team Name' column
	this.schoolNameFieldId = 'field_1862';			// 'School/Award Ceremony Name' column

	if (this.isDivA()) {
		this.apiKey = 'c50f65dc-363f-4022-95c2-e98a0c89fd97';

		// Event RankUpdater
		this.lockEventFinalizeView = 'view_1531';

		// Award Background
		this.presenterEventSelectionBSceneId = '';
		this.presenterEventSelectionCSceneId = '';
		this.presenterEventSelectionAllSceneId = 'scene_616';
		this.presenterStatesBoundBSceneId = '';
		this.presenterStatesBoundCSceneId = '';
		this.presenterStatesBoundAllBSceneId = '';
		this.presenterStatesBoundAllCSceneId = '';
		this.presenterEventAwardSceneId = 'scene_617';
		this.presenterEventIconViewId = 'view_1538';
		this.presenterSchoolBAwardSceneId = '';
		this.presenterSchoolCAwardSceneId = '';
		this.presenterSchoolBCAwardSceneId = '';

		// Event Presenter
		this.presenterEventGrid = {
			awardGrid: 'view_1539',
			rankFieldId: this.eventRankFieldId,
		};
		this.presenterEventNextBtnViewId = 'view_1542';
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

		// Award Background
		this.presenterEventSelectionBSceneId = 'scene_638';
		this.presenterEventSelectionCSceneId = 'scene_642';
		this.presenterEventSelectionAllSceneId = 'scene_605';
		this.presenterStatesBoundBSceneId = 'scene_641';
		this.presenterStatesBoundCSceneId = 'scene_645';
		this.presenterStatesBoundAllBSceneId = 'scene_646';
		this.presenterStatesBoundAllCSceneId = 'scene_647';
		this.presenterEventAwardSceneId = 'scene_606';
		this.presenterEventIconViewId = 'view_1521';
		this.presenterSchoolBAwardSceneId = 'scene_640';
		this.presenterSchoolCAwardSceneId = 'scene_643';
		this.presenterSchoolBCAwardSceneId = 'scene_613';

		// Event Presenter
		this.presenterEventGrid = {
			awardGrid: 'view_1522',
			rankFieldId: this.eventRankFieldId,
		};
		this.presenterEventNextBtnViewId = 'view_1545';

		// School Winners B Presenter
		this.presenterSchoolBGrid = {
			awardGrid: 'view_1673',
			rankFieldId: this.schoolBRankFieldId,
		};
		this.presenterSchoolBNextBtnViewId = 'view_1675';

		// School Winners C Presenter
		this.presenterSchoolCGrid = {
			awardGrid: 'view_1684',
			rankFieldId: this.schoolCRankFieldId,
		};
		this.presenterSchoolCNextBtnViewId = 'view_1686';

		// School Winners BC Presenter
		this.presenterSchoolBCGridLeft = {
			awardGrid: 'view_1555',
			rankFieldId: this.schoolBRankFieldId,
		};
		this.presenterSchoolBCGridRight = {
			awardGrid: 'view_1556',
			rankFieldId: this.schoolCRankFieldId,
		};
		this.presenterSchoolBCNextBtnViewId = 'view_1558';
	}
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
			return (statusField.length > 0) ? statusField[0].identifier : '';
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

function AwardBackground(awardSceneId, iconViewId, iconFieldId, backgroundUrl) {
	this.awardSceneId = awardSceneId;
	this.iconViewId = iconViewId;
	this.iconFieldId = iconFieldId;
	this.rawIconFieldId = this.iconFieldId + '_raw';
	this.backgroundUrl = backgroundUrl;

	this.setBackground = function(image, repeat, size, position) {
		const mainDiv = $('div#knack-dist_1 > div.kn-scenes.kn-section');
		mainDiv.css('background-image', image);
		mainDiv.css('background-repeat', repeat);
		mainDiv.css('background-size', size);
		mainDiv.css('background-position', position);
	}.bind(this);

	this.awardSceneRenderHandler = function(/*event, view, record*/) {
		if (this.iconViewId && this.backgroundUrl) {
			const eventIconUrl = Knack.models[this.iconViewId].attributes[this.rawIconFieldId];
			const cssImageValue = `url("${eventIconUrl}"), url("${this.backgroundUrl}")`;
			this.setBackground(cssImageValue, 'no-repeat, no-repeat', '150px 150px, contain',
				'top 40px right 50px, top left');

			// Hide Knack's icon:
			$(`div#${this.iconViewId} div.${this.iconFieldId}_thumb_1`).hide();
		} else if (this.backgroundUrl) {
			const cssImageValue = `url("${this.backgroundUrl}")`;
			this.setBackground(cssImageValue, 'no-repeat', 'contain', 'top left');
		} else {
			this.setBackground('', '', '', '');
		}
	}.bind(this);

	if (this.awardSceneId) {
		$(document).on(`knack-scene-render.${this.awardSceneId}`, this.awardSceneRenderHandler);
	}
}

const eventAwardBackground = new AwardBackground(
	appInfo.presenterEventAwardSceneId, appInfo.presenterEventIconViewId,
	appInfo.eventIconFieldId, appInfo.awardBackgroundUrl);
const schoolBAwardBackground = new AwardBackground(
	appInfo.presenterSchoolBAwardSceneId, '', '', appInfo.awardBackgroundUrl);
const schoolCAwardBackground = new AwardBackground(
	appInfo.presenterSchoolCAwardSceneId, '', '', appInfo.awardBackgroundUrl);
const schoolBCAwardBackground = new AwardBackground(
	appInfo.presenterSchoolBCAwardSceneId, '', '', appInfo.awardBackgroundUrl);
const eventSelectionBAwardBackground = new AwardBackground(
	appInfo.presenterEventSelectionBSceneId, '', '', appInfo.awardBackgroundUrl);
const eventSelectionCAwardBackground = new AwardBackground(
	appInfo.presenterEventSelectionCSceneId, '', '', appInfo.awardBackgroundUrl);
const eventSelectionAllAwardBackground = new AwardBackground(
	appInfo.presenterEventSelectionAllSceneId, '', '', appInfo.awardBackgroundUrl);
const statesBoundBAwardBackground = new AwardBackground(
	appInfo.presenterStatesBoundBSceneId, '', '', appInfo.awardBackgroundUrl);
const statesBoundCAwardBackground = new AwardBackground(
	appInfo.presenterStatesBoundCSceneId, '', '', appInfo.awardBackgroundUrl);
const statesBoundAllBAwardBackground = new AwardBackground(
	appInfo.presenterStatesBoundAllBSceneId, '', '', appInfo.awardBackgroundUrl);
const statesBoundAllCAwardBackground = new AwardBackground(
	appInfo.presenterStatesBoundAllCSceneId, '', '', appInfo.awardBackgroundUrl);
const tournamentSelectionAwardBackground = new AwardBackground(
	appInfo.presenterTournamentSelectionSceneId, '', '', '');



// ====================================================================

// Each item in gridDefinitions should be an object of this form:
//    {
//       awardGrid: '';
//       rankFieldId: '';
//    }
// The Presenter will add the fields 'medals' and 'numRanksShowing'
// to this structure dynamically.

function Presenter(nextBtnViewId, awardeeNameFieldId, ...gridDefinitions) {
	this.nextBtnViewId = nextBtnViewId;
	this.awardeeNameFieldId = awardeeNameFieldId;
	this.gridDefinitions = gridDefinitions;

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

	this.setTeamNameVisibilities = function() {
		for (let i = 0; i < this.gridDefinitions.length; ++i) {
			let gridDef = this.gridDefinitions[i];
			if (!(gridDef.medals)) {
				continue;
			}
			for (let j = 0; j < gridDef.medals.length; ++j) {
				const medal = gridDef.medals[j];
				const viewId = gridDef.awardGrid;
				const awardeeFieldId = this.awardeeNameFieldId;
				const spanElement = $(`div#${viewId} tr#${medal.id} > td.${awardeeFieldId} > span`);
				if (j < gridDef.medals.length - gridDef.numRanksShowing) {
					spanElement.hide();
				} else {
					spanElement.show();
				}
			}
		}
	}.bind(this);

	this.nextBtnClickHandler = function() {
		// Bail out if gridRenderHandler() has not run already:
		for (let i = 0; i < this.gridDefinitions.length; ++i) {
			let gridDef = this.gridDefinitions[i];
			if (!gridDef.medals) {
				return;
			}
		}

		// Find the minimum number of ranks showing across all grids:
		let minNumRanksShowing = Number.MAX_SAFE_INTEGER;
		for (let i = 0; i < this.gridDefinitions.length; ++i) {
			let gridDef = this.gridDefinitions[i];
			minNumRanksShowing = Math.min(minNumRanksShowing,
				gridDef.numRanksShowing);
		}

		// Increment the number of ranks showing in the first
		// list that has the minimum number of ranks showing:
		for (let i = 0; i < this.gridDefinitions.length; ++i) {
			let gridDef = this.gridDefinitions[i];
			if (gridDef.numRanksShowing === minNumRanksShowing) {
				++(gridDef.numRanksShowing);
				break;
			}
		}

		// Now make the visibilities right:
		this.setTeamNameVisibilities();
		return false;
	}.bind(this);

	this.nextBtnRenderHandler = function(/*event, view, record*/) {
		$(`div#${this.nextBtnViewId} svg`).on('click', this.nextBtnClickHandler);
	}.bind(this);

	this.getGridDefForView = function(view) {
		for (let i = 0; i < this.gridDefinitions.length; ++i) {
			let gridDef = this.gridDefinitions[i];
			if (gridDef.awardGrid === view.key) {
				return gridDef;
			}
		}
		return null;
	}.bind(this);

	this.getMedalList = function(gridDef) {
		const rawRankFieldId = gridDef.rankFieldId + '_raw';
		const models = Knack.models[gridDef.awardGrid].data.models;

		console.log(`Presentation grid row models (awardGrid ${gridDef.awardGrid}):`);
		console.log(models);

		let minRank = Number.MAX_SAFE_INTEGER;
		let maxRank = Number.MIN_SAFE_INTEGER;
		for (let i = 0; i < models.length; ++i) {
			const rawRank = models[i].attributes[rawRankFieldId];
			const rank = Number(rawRank);
			if (rawRank && !isNaN(rank)) {
				minRank = Math.min(minRank, rank);
				maxRank = Math.max(maxRank, rank);
			}
		}

		if (minRank === Number.MAX_SAFE_INTEGER) {
			gridDef.medals = Array(0);
			return;
		}

		gridDef.medals = Array(maxRank - minRank + 1);
		for (let i = 0; i < models.length; ++i) {
			const rawRank = models[i].attributes[rawRankFieldId];
			const rank = Number(rawRank);
			if (rawRank && !isNaN(rank)) {
				if (gridDef.medals[rank - minRank]) {
					throw 'Two teams have the same medal position';
				}
				gridDef.medals[rank - minRank] = {
					id: models[i].attributes.id,
					rank: rank,
				};
			}
		}

		console.log(`Medal array for awardGrid ${gridDef.awardGrid}:`);
		console.log(gridDef.medals);
	}.bind(this);

	this.gridRenderHandler = function(event, view, record) {
		let gridDef = this.getGridDefForView(view);

		// Get the medal data:
		this.getMedalList(gridDef);

		// Hide the table page navigation and table header:
		$(`div#${gridDef.awardGrid} thead`).hide();
		$(`div#${gridDef.awardGrid} div.kn-records-nav`).hide();

		// Replace ranks numbers with place names:
		for (let i = 0; i < gridDef.medals.length; ++i) {
			const viewId = gridDef.awardGrid;
			const medal = gridDef.medals[i];
			const rankFieldId = gridDef.rankFieldId;
			const spanElement = $(`div#${viewId} tr#${medal.id} > td.${rankFieldId} > span`);
			spanElement.text(`${this.medalLabels[medal.rank]}`);
		}

		// Hide the team names:
		gridDef.numRanksShowing = 0;
		this.setTeamNameVisibilities();
	}.bind(this);

	for (let i = 0; i < this.gridDefinitions.length; ++i) {
		$(document).on(`knack-view-render.${this.gridDefinitions[i].awardGrid}`,
			this.gridRenderHandler);
	}
	$(document).on(`knack-view-render.${this.nextBtnViewId}`, this.nextBtnRenderHandler);
}

// function Presenter(nextBtnViewId, awardeeNameFieldId, ...gridDefinitions)
const eventPresenter = new Presenter(appInfo.presenterEventNextBtnViewId,
	appInfo.teamNameFieldId, appInfo.presenterEventGrid);
const schoolBPresenter = appInfo.isDivA() ? null : new Presenter(
	appInfo.presenterSchoolBNextBtnViewId, appInfo.schoolNameFieldId,
	appInfo.presenterSchoolBGrid);
const schoolCPresenter = appInfo.isDivA() ? null : new Presenter(
	appInfo.presenterSchoolCNextBtnViewId, appInfo.schoolNameFieldId,
	appInfo.presenterSchoolCGrid);
const schoolBCPresenter = appInfo.isDivA() ? null : new Presenter(
	appInfo.presenterSchoolBCNextBtnViewId, appInfo.schoolNameFieldId,
	appInfo.presenterSchoolBCGridLeft, appInfo.presenterSchoolBCGridRight);
