'use strict';

// Recreate Duosmium Download page in Portal, but under Programmer/Developer login
// Presentation: Gold bid versus "true" exhibition teams

function assert(condition, message) {
	if (!condition) {
		throw new Error(message || "Assertion failed");
	}
}

function KnackAppInfo() {
	this.isDivA = function() {
		return false;
	}.bind(this);

	this.isDivBC = function() {
		return true;
	}.bind(this);

	this.isScoreScope = function() {
		return false;
	}.bind(this);

	// Sanity check:
	const trueCount = (this.isDivA() ? 1 : 0)
		+ (this.isDivBC() ? 1 : 0)
		+ (this.isScoreScope() ? 1 : 0);
	assert(trueCount === 1, 'Exactly one of isDivA, isDivBC, and isScoreScope must return true');

	this.choose = function(aValue, bcValue, ssValue) {
		if (this.isDivA()) {
			return aValue;
		} else if (this.isDivBC()) {
			return bcValue;
		} else if (this.isScoreScope()) {
			return ssValue;
		} else {
			assert(false, 'One of isDivA, isDivBC, and isScoreScope must return true');
		}
	}.bind(this);

	this.apiKey = this.choose('c50f65dc-363f-4022-95c2-e98a0c89fd97',
		'539b2e01-8b10-4388-b5a7-22dd644e9e2d', '212cab6a-6f68-4cfa-a53c-bcb06e429b78');

	// Event RankUpdater
	this.esScoringGrid = 'view_1375';
	this.scoremasterEventGrid = 'view_1363';
	this.lockEventSceneId = 'scene_563';
	this.lockEventGrid = 'view_1380';
	this.lockEventSubmitForm = 'view_1382';
	this.lockEventFinalizeView = this.choose('view_1531', 'view_1609', 'view_1609');

	this.eventScoreTableId = 'object_95';			// 'Raw Scores' table
	this.eventAdjScoreFieldId = 'field_1736';		// 'Raw Scores/Tier Adjusted Score' column
	this.eventStatusFieldId = 'field_1731';		// 'Raw Scores/Event Special Status' column
	this.eventIsTrialFieldId = 'field_1705';		// 'Events by Tournament/Trial Event' column
	this.eventRankFieldId = this.choose('field_1737', 'field_2027', 'field_1737');	// 'Raw Scores/Rank' column
	this.eventAdjRankFieldId = this.choose('', 'field_1737', '');							// 'Raw Scores/AdjRank' column (there is none for Div. A)

	this.teamTableId = 'object_80';					// 'Teams' table
	this.teamIsExhibitionTeamFieldId = this.choose('', 'field_1979', 'field_1979');	// 'Teams/Exhibition Team' column (there is none for Div. A)
	this.teamAdjScoreFieldId = 'field_1760';		// 'Teams/Tie-Adj Overall Score' column
	this.teamAdjRankFieldId = 'field_1900';		// 'Teams/AdjRank' column

	this.schoolTableId = 'object_5';					// 'School' table
	this.schoolBAdjScoreFieldId = 'field_1763';	// 'School/Reg: Best B Tie-Adj Score' column
	this.schoolCAdjScoreFieldId = 'field_1764';	// 'School/Reg: Best C Tie-Adj Score' column
	this.schoolBAdjRankFieldId = 'field_1938';	// 'School/Reg: B AdjRank' column
	this.schoolCAdjRankFieldId = 'field_1939';	// 'School/Reg: C AdjRank' column

	// Div B Overview School RankUpdater
	this.overviewSchoolBTeamBeforeGrid = this.choose('', 'view_1578', 'view_1578');
	this.overviewSchoolBTeamAfterGrid = this.choose('', 'view_1752', 'view_1752');
	this.overviewSchoolBSchoolGrid = this.choose('', 'view_1384', 'view_1835');
	this.overviewSchoolBLockSceneId = this.choose('', 'scene_624', 'scene_624');
	this.overviewSchoolBLockGrid = this.choose('', 'view_1585', 'view_1851');
	this.overviewSchoolBSubmitForm = this.choose('', 'view_1586', 'view_1586');
	this.overviewSchoolBFinalizeView = this.choose('', 'view_1629', 'view_1629');

	// Div B Overview Team RankUpdater
	this.overviewTeamBTeamGrid = this.choose('', 'view_1769', 'view_1769');
	this.overviewTeamBLockSceneId = this.choose('', 'scene_665', 'scene_665');
	this.overviewTeamBLockGrid = this.choose('', 'view_1774', 'view_1774');
	this.overviewTeamBSubmitForm = this.choose('', 'view_1775', 'view_1775');
	this.overviewTeamBFinalizeView = this.choose('', 'view_1776', 'view_1776');

	// Div C Overview School RankUpdater
	this.overviewSchoolCTeamBeforeGrid = this.choose('', 'view_1581', 'view_1581');
	this.overviewSchoolCTeamAfterGrid = this.choose('', 'view_1761', 'view_1761');
	this.overviewSchoolCSchoolGrid = this.choose('', 'view_1387', 'view_1836');
	this.overviewSchoolCLockSceneId = this.choose('', 'scene_629', 'scene_629');
	this.overviewSchoolCLockGrid = this.choose('', 'view_1633', 'view_1850');
	this.overviewSchoolCSubmitForm = this.choose('', 'view_1634', 'view_1634');
	this.overviewSchoolCFinalizeView = this.choose('', 'view_1635', 'view_1635');

	// Div C Overview Team RankUpdater
	this.overviewTeamCTeamGrid = this.choose('', 'view_1850', 'view_1842');
	this.overviewTeamCLockSceneId = this.choose('', 'scene_689', 'scene_692');
	this.overviewTeamCLockGrid = this.choose('', 'view_1854', 'view_1847');
	this.overviewTeamCSubmitForm = this.choose('', 'view_1855', 'view_1848');
	this.overviewTeamCFinalizeView = this.choose('', 'view_1856', 'view_1849');

	// Award Background
	this.presenterTournamentSelectionSceneId = 'scene_587';
	this.scoremasterSceneId = 'scene_546';
	this.adminSceneId = 'scene_69';
	this.eventIconFieldId = 'field_1712';			// Events - General/Event Icon

	// Award Background
	this.presenterEventSelectionBSceneId = this.choose('', 'scene_638', 'scene_638');
	this.presenterEventSelectionCSceneId = this.choose('', 'scene_642', 'scene_642');
	this.presenterEventSelectionAllSceneId = this.choose('scene_616', 'scene_605', 'scene_605');
	this.presenterStatesBoundBSceneId = this.choose('', 'scene_641', '');
	this.presenterStatesBoundCSceneId = this.choose('', 'scene_645', '');
	this.presenterStatesBoundAllBSceneId = this.choose('', 'scene_646', '');
	this.presenterStatesBoundAllCSceneId = this.choose('', 'scene_647', '');
	this.presenterEventAwardSceneId = this.choose('scene_617', 'scene_606', 'scene_606');
	this.presenterEventIconViewId = this.choose('view_1538', 'view_1521', 'view_1521');
	this.presenterSchoolBAwardSceneId = this.choose('', 'scene_640', 'scene_640');
	this.presenterSchoolCAwardSceneId = this.choose('', 'scene_643', 'scene_643');
	this.presenterSchoolBCAwardSceneId = this.choose('', 'scene_613', 'scene_613');
	this.presenterTeamBAwardSceneId = this.choose('', 'scene_646', 'scene_693');
	this.presenterTeamCAwardSceneId = this.choose('', 'scene_647', 'scene_694');
	this.presenterTeamBCAwardSceneId = this.choose('', 'scene_615', 'scene_615');
	this.awardBackgroundUrl = this.choose(
		'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg',
		'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg',
		'https://static.wixstatic.com/shapes/78a71f_ca485e8df91e4837a83c85af6bae7814.svg');

	// Presenter
	this.teamNameFieldId = 'field_1202';			// 'Teams/Award Ceremony Team Name' column
	this.schoolNameFieldId = 'field_1862';			// 'School/Award Ceremony Name' column in BC portal
																// 'School/School Name' column in ScoreScope
																// Not used in Div. A portal

	// Event Presenter
	this.presenterEventGrid = {
		awardGrid: this.choose('view_1539', 'view_1522', 'view_1522'),
		rankFieldId: this.eventRankFieldId,
	};
	this.presenterEventNextBtnViewId = this.choose('view_1542', 'view_1545', 'view_1545');

	// School Winners B Presenter
	this.presenterSchoolBGrid = {
		awardGrid: this.choose('', 'view_1673', 'view_1852'),
		rankFieldId: this.schoolBAdjRankFieldId,
	};
	this.presenterSchoolBNextBtnViewId = this.choose('', 'view_1675', 'view_1675');

	// School Winners C Presenter
	this.presenterSchoolCGrid = {
		awardGrid: this.choose('', 'view_1684', 'view_1853'),
		rankFieldId: this.schoolCAdjRankFieldId,
	};
	this.presenterSchoolCNextBtnViewId = this.choose('', 'view_1686', 'view_1686');

	// School Winners BC Presenter
	this.presenterSchoolBCGridLeft = {
		awardGrid: this.choose('', 'view_1555', 'view_1854'),
		rankFieldId: this.schoolBAdjRankFieldId,
	};
	this.presenterSchoolBCGridRight = {
		awardGrid: this.choose('', 'view_1556', 'view_1855'),
		rankFieldId: this.schoolCAdjRankFieldId,
	};
	this.presenterSchoolBCNextBtnViewId = this.choose('', 'view_1558', 'view_1558');

	// Team Winners B Presenter
	this.presenterTeamBGrid = {
		awardGrid: this.choose('', '', 'view_1862'),									// Not created yet in BC
		rankFieldId: this.teamAdjRankFieldId,
	};
	this.presenterTeamBNextBtnViewId = this.choose('', '', 'view_1861');		// Not created yet in BC

	// Team Winners C Presenter
	this.presenterTeamCGrid = {
		awardGrid: this.choose('', '', 'view_1866'),									// Not created yet in BC
		rankFieldId: this.teamAdjRankFieldId,
	};
	this.presenterTeamCNextBtnViewId = this.choose('', '', 'view_1867');		// Not created yet in BC

	// Team Winners BC Presenter
	this.presenterTeamBCGridLeft = {
		awardGrid: this.choose('', 'view_1560', 'view_1560'),						// Partially created in BC
		rankFieldId: this.teamAdjRankFieldId,
	};
	this.presenterTeamBCGridRight = {
		awardGrid: this.choose('', 'view_1561', 'view_1561'),						// Partially created in BC
		rankFieldId: this.teamAdjRankFieldId,
	};
	this.presenterTeamBCNextBtnViewId = this.choose('', '', 'view_1870');	// Not created yet in BC
}

const appInfo = new KnackAppInfo();

function RankUpdater(gridId, sceneId, lockSubmitForm, finalizeBtnViewId,
		scoreFieldId, rankFieldId, adjRankFieldId, statusFieldId, tableId, isEventRanker) {
	this.gridId = gridId;
	this.sceneId = sceneId;
	this.lockSubmitForm = lockSubmitForm;
	this.finalizeBtnViewId = finalizeBtnViewId;
	this.scoreFieldId = scoreFieldId;
	this.rankFieldId = rankFieldId;
	this.rawRankFieldId = this.rankFieldId + '_raw';
	this.adjRankFieldId = adjRankFieldId;
	this.rawAdjRankFieldId = this.adjRankFieldId + '_raw';
	this.statusFieldId = statusFieldId;
	this.tableId = tableId;
	this.isEventRanker = isEventRanker;
	this.scoreInfos = null;
	this.rankStorageInProgress = false;

	this.getStatus = function(model) {
		if (this.statusFieldId) {
			const statusField = model.attributes[this.statusFieldId + '_raw'];
			return (statusField.length > 0) ? statusField[0].identifier : '';
		} else {
			return '';
		}
	}.bind(this);

	this.isExhibitionTeam = function(model) {
		if (!appInfo.teamIsExhibitionTeamFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, appInfo.teamIsExhibitionTeamFieldId)) {
			// The ES scoring grid will use this option, because the grid doesn't
			// have an exhibition column. This is on purpose, because we don't want
			// the ES to have to understand about exhibition teams. The end result
			// will be a straight-up ranking of all teams without regard for
			// exhibition status.
			return false;
		} else {
			const rawFieldId = appInfo.teamIsExhibitionTeamFieldId + '_raw';
			return model.attributes[rawFieldId] === true;
		}
	}.bind(this);

	this.isTrialEvent = function(model) {
		if (!appInfo.eventIsTrialFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, appInfo.eventIsTrialFieldId)) {
			// For the ES scoring grid, which doesn't have this column
			return false;
		} else {
			const rawFieldId = appInfo.eventIsTrialFieldId + '_raw';
			return model.attributes[rawFieldId] === true;
		}
	}.bind(this);

	this.hasRank = function(model) {
		if (!this.rankFieldId) {
			return false;	// For cases where the field doesn't exist (never?)
		} else {
			return Object.hasOwn(model.attributes, this.rawRankFieldId);
		}
	}.bind(this);

	this.getRank = function(model) {
		return this.hasRank(model)
			? model.attributes[this.rawRankFieldId]
			: -1;	// for grids w/o an adj. rank column
	}.bind(this);

	this.hasAdjRank = function(model) {
		if (!this.adjRankFieldId) {
			return false;	// For Div. A, where the field doesn't exist
		} else {
			return Object.hasOwn(model.attributes, this.rawAdjRankFieldId);
		}
	}.bind(this);

	this.getAdjRank = function(model) {
		return this.hasAdjRank(model)
			? model.attributes[this.rawAdjRankFieldId]
			: -1;	// for grids w/o an adj. rank column
	}.bind(this);

	this.createScoreInfo = function(model) {
		return {
			id: model.attributes.id,
			adjScore: model.attributes[this.scoreFieldId + '_raw'],
			status: this.getStatus(model),
			isExhibition: this.isExhibitionTeam(model),
			isTrialEvent: this.isTrialEvent(model),
			hasRank: this.hasRank(model),
			oldRank: this.getRank(model),
			newRank: -1,
			hasAdjRank: this.hasAdjRank(model),
			oldAdjRank: this.getAdjRank(model),
			newAdjRank: -1,
		};
	}.bind(this);

	this.computeRankClusters = function(scoreInfos, adjustForExhibition) {
		const scoresWithFlags = scoreInfos
			.map((scoreInfo) => {
				return {
					score: scoreInfo.adjScore,
					isExhibition: (adjustForExhibition && scoreInfo.isExhibition),
				};
			})
			.sort((lhs, rhs) => this.isEventRanker
				? (rhs.score - lhs.score)
				: (lhs.score - rhs.score));
		const rankClusters = [];
		let currentCluster = [];
		let lastScoreWasExhibition = true;
		for (const scoreWithFlag of scoresWithFlags) {
			if (!lastScoreWasExhibition) {
				rankClusters.push(currentCluster);
				currentCluster = [];
			}
			currentCluster.push(scoreWithFlag.score);
			lastScoreWasExhibition = scoreWithFlag.isExhibition;
		}
		if (currentCluster.length > 0) {
			rankClusters.push(currentCluster);
		}
		return rankClusters;
	}.bind(this);

	this.countNonExhibitionTeams = function(scoreInfos) {
		let numNonExhibitionTeams = 0;
		for (const scoreInfo of scoreInfos) {
			if (!scoreInfo.isExhibition) {
				++numNonExhibitionTeams;
			}
		}
		return numNonExhibitionTeams;
	}.bind(this);

	this.computeRank = function(scoreInfo, numTeams, clusters) {
		if (scoreInfo.status === 'Participation Points Only') {
			return numTeams;
		} else if (scoreInfo.status === 'No Show') {
			return numTeams + 1;
		} else if (scoreInfo.status === 'Disqualification') {
			return numTeams + 2;
		} else {
			for (let i = 0; i < clusters.length; ++i) {
				if (clusters[i].indexOf(scoreInfo.adjScore) >= 0) {
					return i + 1;
				}
			}
		}
	}.bind(this);

	this.computeScoreInfoList = function() {
		const models = Knack.models[this.gridId].data.models;
		console.log('Grid row models:');
		console.log(models);

		const scoreInfos = models.map((model) => this.createScoreInfo(model));

		if (scoreInfos[0].hasRank) {
			const rankClusters = this.computeRankClusters(scoreInfos, false);
			const numTeams = scoreInfos.length;
			for (const scoreInfo of scoreInfos) {
				scoreInfo.newRank = this.computeRank(scoreInfo, numTeams, rankClusters);
			}
		}

		if (scoreInfos[0].hasAdjRank) {
			// Exhibition teams may compete in trial events, but
			// in such cases they are not considered exhibition teams:
			const adjustForExhibition = !scoreInfos[0].isTrialEvent;
			const adjRankClusters = this.computeRankClusters(scoreInfos, adjustForExhibition);
			const numTeams = adjustForExhibition
				? this.countNonExhibitionTeams(scoreInfos)
				: scoreInfos.length;
			for (const scoreInfo of scoreInfos) {
				scoreInfo.newAdjRank = this.computeRank(scoreInfo, numTeams, adjRankClusters);
			}
		}

		console.log('Score info list:');
		console.log(scoreInfos);
		return scoreInfos;
	}.bind(this);

	this.computeRankHistogram = function(scoreInfos) {
		const rankHistogram = new Map();
		for (const scoreInfo of scoreInfos) {
			const rank = scoreInfo.newRank;
			if (rankHistogram.has(rank)) {
				rankHistogram.set(rank, rankHistogram.get(rank) + 1);
			} else {
				rankHistogram.set(rank, 1);
			}
		}
		return rankHistogram;
	}.bind(this);

	this.getCellBackgroundColor = function(scoreInfo, rankProperty, rankHistogram) {
		if (scoreInfo.status) {
			return '';	// default color for special statuses
		} else if (rankHistogram.has(scoreInfo[rankProperty])
				&& rankHistogram.get(scoreInfo[rankProperty]) > 1) {
			return '#fbe9c2';	// yellow for ties
		} else if (scoreInfo.isExhibition && !scoreInfo.isTrialEvent) {
			return '#9db0c5';	// greyish blue for exhibition teams in non-trial events
		} else {
			return '';	// default color otherwise
		}
	}.bind(this);

	this.getDisplayRank = function(scoreInfo, rankProperty) {
		if (scoreInfo.status) {
			return '';	// Rank of a special status is not meaningful to users
		} else if (!this.isEventRanker && scoreInfo.isExhibition) {
			return '';	// For team and school rankings, we show the ranks
							// of exhibition teams as blank, because they don't
							// earn team/school trophies.
		} else {
			return scoreInfo[rankProperty];
		}
	}.bind(this);

	this.updateTeamRanks = function(scoreInfos) {
		for (const scoreInfo of scoreInfos) {
			if (this.rankFieldId) {
				const rankHistogram = this.computeRankHistogram(scoreInfos);
				const bg = this.getCellBackgroundColor(scoreInfo, 'newRank', rankHistogram);
				const rank = this.getDisplayRank(scoreInfo, 'newRank');
				$(`div#${gridId} tr#${scoreInfo.id} > td.${this.rankFieldId}`).css('background', bg);
				$(`div#${gridId} tr#${scoreInfo.id} > td.${this.rankFieldId} > span`).text(`${rank}`);
			}
			if (this.adjRankFieldId) {
				const rankHistogram = new Map();
				const bg = this.getCellBackgroundColor(scoreInfo, 'newAdjRank', rankHistogram);
				const adjRank = this.getDisplayRank(scoreInfo, 'newAdjRank');
				$(`div#${gridId} tr#${scoreInfo.id} > td.${this.adjRankFieldId}`).css('background', bg);
				$(`div#${gridId} tr#${scoreInfo.id} > td.${this.adjRankFieldId} > span`).text(`${adjRank}`);
			}
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

	this.putRankToDatabase = async function(id, newRank, newAdjRank) {
		const url = `https://api.knack.com/v1/objects/${this.tableId}/records/${id}`;
		let options = {
			method: 'PUT',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
				'X-Knack-Application-Id': Knack.application_id,
				'X-Knack-REST-API-KEY': appInfo.apiKey,
				'Accept': 'application/json',
			},
		};
		if (this.rankFieldId && this.adjRankFieldId) {
			options.body = JSON.stringify({
				[this.rankFieldId]: newRank,
				[this.adjRankFieldId]: newAdjRank,
			});
		} else if (this.rankFieldId) {
			options.body = JSON.stringify({
				[this.rankFieldId]: newRank,
			});
		} else if (this.adjRankFieldId) {
			options.body = JSON.stringify({
				[this.adjRankFieldId]: newAdjRank,
			});
		}
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

	this.putRanksToDatabase = async function(scoreInfos) {
		for (const scoreInfo of scoreInfos) {
			// On team and school rankings, we store a blank rank for exhibition teams,
			// because they don't earn team/school trophies:
			const rankToStore = (!this.isEventRanker && scoreInfo.isExhibition)
				? ''
				: scoreInfo.newRank;
			const adjRankToStore = (!this.isEventRanker && scoreInfo.isExhibition)
				? ''
				: scoreInfo.newAdjRank;
			if (rankToStore === scoreInfo.oldRank
					&& adjRankToStore === scoreInfo.oldAdjRank) {
				continue;
			}
			await this.putRankToDatabase(scoreInfo.id, rankToStore, adjRankToStore);
		}
	}.bind(this);

	this.finalizeBtnClickHandler = function() {
		if (this.rankStorageInProgress) {
			return false;
		}
		$(`#${this.lockSubmitForm} div#kn-input-`).show();	// Result report - Please Wait
		this.setSpinner();
		this.rankStorageInProgress = true;
		this.putRanksToDatabase(this.scoreInfos)
			.then(() => {
				console.log('Database updates for ranking succeeded');
				$(`#${this.lockSubmitForm} div#kn-input- h3.kn-title`).text('Success!');
				const label = this.isEventRanker ? 'event' : 'tournament';
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
		this.scoreInfos = this.computeScoreInfoList();
		this.updateTeamRanks(this.scoreInfos);
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
	appInfo.eventAdjScoreFieldId, appInfo.eventRankFieldId, appInfo.eventAdjRankFieldId,
	appInfo.eventStatusFieldId, '', true);
const scoremasterEventUpdater = new RankUpdater(appInfo.scoremasterEventGrid, '', '', '',
	appInfo.eventAdjScoreFieldId, appInfo.eventRankFieldId, appInfo.eventAdjRankFieldId,
	appInfo.eventStatusFieldId, '', true);
const lockEventUpdater = new RankUpdater(appInfo.lockEventGrid, appInfo.lockEventSceneId,
	appInfo.lockEventSubmitForm, appInfo.lockEventFinalizeView,
	appInfo.eventAdjScoreFieldId, appInfo.eventRankFieldId, appInfo.eventAdjRankFieldId,
	appInfo.eventStatusFieldId, appInfo.eventScoreTableId, true);

const overviewSchoolBTeamBeforeUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewSchoolBTeamBeforeGrid, '', '', '',
	appInfo.teamAdjScoreFieldId, '', appInfo.teamAdjRankFieldId, '', '', false);
const overviewSchoolBTeamAfterUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewSchoolBTeamAfterGrid, '', '', '',
	appInfo.teamAdjScoreFieldId, '', appInfo.teamAdjRankFieldId, '', '', false);
const overviewSchoolBSchoolUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewSchoolBSchoolGrid, '', '', '',
	appInfo.schoolBAdjScoreFieldId, '', appInfo.schoolBAdjRankFieldId, '', '', false);
const overviewSchoolBLockUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewSchoolBLockGrid, appInfo.overviewSchoolBLockSceneId,
	appInfo.overviewSchoolBSubmitForm, appInfo.overviewSchoolBFinalizeView,
	appInfo.schoolBAdjScoreFieldId, '', appInfo.schoolBAdjRankFieldId, '',
	appInfo.schoolTableId, false);

const overviewTeamBTeamUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewTeamBTeamGrid, '', '', '',
	appInfo.teamAdjScoreFieldId, '', appInfo.teamAdjRankFieldId, '', '', false);
const overviewTeamBLockUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewTeamBLockGrid, appInfo.overviewTeamBLockSceneId,
	appInfo.overviewTeamBSubmitForm, appInfo.overviewTeamBFinalizeView,
	appInfo.teamAdjScoreFieldId, '', appInfo.teamAdjRankFieldId, '',
	appInfo.teamTableId, false);

const overviewSchoolCTeamBeforeUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewSchoolCTeamBeforeGrid, '', '', '',
	appInfo.teamAdjScoreFieldId, '', appInfo.teamAdjRankFieldId, '', '', false);
const overviewSchoolCTeamAfterUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewSchoolCTeamAfterGrid, '', '', '',
	appInfo.teamAdjScoreFieldId, '', appInfo.teamAdjRankFieldId, '', '', false);
const overviewSchoolCSchoolUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewSchoolCSchoolGrid, '', '', '',
	appInfo.schoolCAdjScoreFieldId, '', appInfo.schoolCAdjRankFieldId, '', '', false);
const overviewSchoolCLockUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewSchoolCLockGrid, appInfo.overviewSchoolCLockSceneId,
	appInfo.overviewSchoolCSubmitForm, appInfo.overviewSchoolCFinalizeView,
	appInfo.schoolCAdjScoreFieldId, '', appInfo.schoolCAdjRankFieldId, '',
	appInfo.schoolTableId, false);

const overviewTeamCTeamUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewTeamCTeamGrid, '', '', '',
	appInfo.teamAdjScoreFieldId, '', appInfo.teamAdjRankFieldId, '', '', false);
const overviewTeamCLockUpdater = appInfo.isDivA() ? null : new RankUpdater(
	appInfo.overviewTeamCLockGrid, appInfo.overviewTeamCLockSceneId,
	appInfo.overviewTeamCSubmitForm, appInfo.overviewTeamCFinalizeView,
	appInfo.teamAdjScoreFieldId, '', appInfo.teamAdjRankFieldId, '',
	appInfo.teamTableId, false);



// ====================================================================

function AwardBackground(awardSceneId, iconViewId, iconFieldId, backgroundUrl) {
	this.awardSceneId = awardSceneId;
	this.iconViewId = iconViewId;
	this.iconFieldId = iconFieldId;
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
			const rawIconFieldId = this.iconFieldId + '_raw';
			const eventIconUrl = Knack.models[this.iconViewId].attributes[rawIconFieldId];
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
const teamBAwardBackground = new AwardBackground(
	appInfo.presenterTeamBAwardSceneId, '', '', appInfo.awardBackgroundUrl);
const teamCAwardBackground = new AwardBackground(
	appInfo.presenterTeamCAwardSceneId, '', '', appInfo.awardBackgroundUrl);
const teamBCAwardBackground = new AwardBackground(
	appInfo.presenterTeamBCAwardSceneId, '', '', appInfo.awardBackgroundUrl);
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
const scoremasterAwardBackground = new AwardBackground(
	appInfo.scoremasterSceneId, '', '', '');
const adminAwardBackground = new AwardBackground(
	appInfo.adminSceneId, '', '', '');


// ====================================================================

// Each item in gridDefinitions should be an object of this form:
// 	{
// 		awardGrid: '';
// 		rankFieldId: '';
// 	}
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
		'Thirteenth Place:',
		'Fourteenth Place:',
		'Fifteenth Place:',
		'Sixteenth Place:',
		'Seventeenth Place:',
		'Eighteenth Place:',
		'Nineteenth Place:',
		'Twentieth Place:',
	];

	this.setTeamNameVisibilities = function() {
		for (const gridDef of this.gridDefinitions) {
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
		for (const gridDef of this.gridDefinitions) {
			if (!(gridDef.medals)) {
				return;
			}
		}

		// Find the maximum number of ranks not showing across grids
		// that are not fully displayed:
		let maxNumRanksNotShowing = Number.MIN_SAFE_INTEGER;
		for (const gridDef of this.gridDefinitions) {
			if (gridDef.numRanksShowing < gridDef.medals.length) {
				const numRanksNotShowing = gridDef.medals.length - gridDef.numRanksShowing;
				maxNumRanksNotShowing = Math.max(maxNumRanksNotShowing, numRanksNotShowing);
			}
		}

		// Increment the number of ranks showing in the first list that
		// (a) is not fully displayed and (b) has the maximum number of
		// ranks not showing:
		if (maxNumRanksNotShowing != Number.MIN_SAFE_INTEGER) {
			for (const gridDef of this.gridDefinitions) {
				const numRanksNotShowing = gridDef.medals.length - gridDef.numRanksShowing;
				if (gridDef.numRanksShowing < gridDef.medals.length
						&& numRanksNotShowing === maxNumRanksNotShowing) {
					++(gridDef.numRanksShowing);
					break;
				}
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
		for (const gridDef of this.gridDefinitions) {
			if (gridDef.awardGrid === view.key) {
				return gridDef;
			}
		}
		return null;
	}.bind(this);

	this.getMedalList = function(gridDef) {
		const models = Knack.models[gridDef.awardGrid].data.models;

		console.log(`Presentation grid row models (awardGrid ${gridDef.awardGrid}):`);
		console.log(models);

		gridDef.medals = models
			.map((model) => {
				const rawRank = model.attributes[this.rawRankFieldId];
				const rank = Number(rawRank);
				return {
					id: model.attributes.id,
					rank: (rawRank && !isNaN(rank)) ? rank : 0,
				};
			})
			.sort((lhs, rhs) => lhs.rank - rhs.rank);

		console.log(`Medal array for awardGrid ${gridDef.awardGrid}:`);
		console.log(gridDef.medals);
	}.bind(this);

	this.gridRenderHandler = function(event, view, record) {
		const gridDef = this.getGridDefForView(view);

		// Get the medal data:
		this.getMedalList(gridDef);

		// Hide the table page navigation and table header:
		$(`div#${gridDef.awardGrid} thead`).hide();
		$(`div#${gridDef.awardGrid} div.kn-records-nav`).hide();

		// Replace ranks numbers with place names:
		const viewId = gridDef.awardGrid;
		const rankFieldId = gridDef.rankFieldId;
		for (const medal of gridDef.medals) {
			const spanElement = $(`div#${viewId} tr#${medal.id} > td.${rankFieldId} > span`);
			spanElement.text(`${this.medalLabels[medal.rank]}`);
		}

		// Hide the team names:
		gridDef.numRanksShowing = 0;
		this.setTeamNameVisibilities();
	}.bind(this);

	for (const gridDef of this.gridDefinitions) {
		$(document).on(`knack-view-render.${gridDef.awardGrid}`, this.gridRenderHandler);
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
const teamBPresenter = appInfo.isDivA() ? null : new Presenter(
	appInfo.presenterTeamBNextBtnViewId, appInfo.teamNameFieldId,
	appInfo.presenterTeamBGrid);
const teamCPresenter = appInfo.isDivA() ? null : new Presenter(
	appInfo.presenterTeamCNextBtnViewId, appInfo.teamNameFieldId,
	appInfo.presenterTeamCGrid);
const teamBCPresenter = appInfo.isDivA() ? null : new Presenter(
	appInfo.presenterTeamBCNextBtnViewId, appInfo.teamNameFieldId,
	appInfo.presenterTeamBCGridLeft, appInfo.presenterTeamBCGridRight);
	