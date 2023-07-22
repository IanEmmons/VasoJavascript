'use strict';

const medalLabels = [
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

function sleep(timeInMillis) {
	return new Promise(resolve => setTimeout(resolve, timeInMillis));
}

function dumpObject(obj, label) {
	console.log(`${label} functions:`);
	console.log(Object.getOwnPropertyNames(obj).filter(
		(p) => typeof obj[p] === 'function'));

	console.log(`${label} objects and arrays:`);
	console.log(Object.getOwnPropertyNames(obj).filter(
		(p) => typeof obj[p] === 'object'));

	console.log(`${label} other:`);
	console.log(Object.getOwnPropertyNames(obj)
		.filter((p) => !['function', 'object'].includes(typeof obj[p]))
		.map((p) => `${p} = ${obj[p]}`));
}

function KnackAppInfo(appName) {
	if (appName === 'Stand-Alone Scoring App') {
		this.apiKey = '651feb26-737e-46ce-8f15-85b929680839';
		this.esScoringGrid = 'view_1323';
		this.scoremasterScoringGrid = 'view_1338';
		this.lockScoresScoringGrid = 'view_1356';
		this.lockScoresSubmitForm = 'view_1347';
		this.putRanksResultReport = 'view_1364';
		this.rawScoreTableId = 'object_92';
		this.adjScoreFieldId = 'field_1719_raw';
		this.rankFieldId = 'field_1725';
		this.rawRankFieldId = 'field_1725_raw';
		this.statusFieldId = 'field_1700_raw';

		this.presenterGrid = 'view_1353';
		this.rawTeamNameFieldId = 'field_1202_raw';
	} else if (appName === 'DivA Scoring App') {
		this.apiKey = '';
		this.esScoringGrid = '';
		this.scoremasterScoringGrid = '';
		this.lockScoresScoringGrid = '';
		this.lockScoresSubmitForm = '';
		this.putRanksResultReport = '';
		this.rawScoreTableId = '';
		this.adjScoreFieldId = '';
		this.rankFieldId = '';
		this.rawRankFieldId = '';
		this.statusFieldId = '';
	} else if (appName === 'DivBC Scoring App') {
		this.apiKey = '539b2e01-8b10-4388-b5a7-22dd644e9e2d';
		this.esScoringGrid = 'view_1375';
		this.scoremasterScoringGrid = 'view_1363';
		this.lockScoresScoringGrid = 'view_1380';
		this.lockScoresSubmitForm = 'view_1382';
		this.putRanksResultReport = 'view_1381';
		this.rawScoreTableId = 'object_95';
		this.adjScoreFieldId = 'field_1736_raw';
		this.rankFieldId = 'field_1737';
		this.rawRankFieldId = 'field_1737_raw';
		this.statusFieldId = 'field_1731_raw';

		this.presenterGrid = 'view_1442';
		this.iconViewId = 'view_1440';
		this.teamNameFieldId = 'field_1202';
		this.rawTeamNameFieldId = 'field_1202_raw';
		this.iconFieldId = 'field_1712';
		//this.iconFieldId = 'field_1703.field_1712';
		//this.iconFieldId = 'field_1703.field_1712:thumb_1';
	}
}

//const appInfo = new KnackAppInfo('Stand-Alone Scoring App');
//const appInfo = new KnackAppInfo('DivA Scoring App');
const appInfo = new KnackAppInfo('DivBC Scoring App');

function RankUpdater(scoresViewId) {
	this.scoresViewId = scoresViewId;

	this.createScoreInfo = function(scoreInfoMap, model) {
		const statusField = model.attributes[appInfo.statusFieldId];
		const status = (statusField.length > 0)
			? statusField[0].identifier
			: '';
		const scoreInfo = {
				adjScore: model.attributes[appInfo.adjScoreFieldId],
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

	this.computeScoreInfoMap = function() {
		const models = Knack.models[this.scoresViewId].data.models;
		const numTeams = models.length;
		console.log(`Number of teams: ${numTeams}`);
		console.log('Grid row models:');
		console.log(models);

		const scoreInfoMap = new Map();
		models.forEach(
			(model) => this.createScoreInfo(scoreInfoMap, model));

		const sortedScores = models.slice()
			.map((model) => model.attributes[appInfo.adjScoreFieldId])
			.sort((lhs, rhs) => (rhs - lhs));
		for (const [id, scoreInfo] of scoreInfoMap) {
			this.setRank(scoreInfo, numTeams, sortedScores);
		}

		console.log('Score info map:');
		console.log(scoreInfoMap);
		return scoreInfoMap;
	}.bind(this);

	this.updateTeamRanks = function(scoreInfoMap) {
		const numTeams = scoreInfoMap.size;

		const rankHistogram = new Map();
		for (const [id, scoreInfo] of scoreInfoMap) {
			this.incrementRankCount(rankHistogram, scoreInfo.newRank);
		}

		for (const [id, scoreInfo] of scoreInfoMap) {
			const bgColor = this.getBgColor(scoreInfo.newRank, numTeams, rankHistogram);
			$(`div#${scoresViewId} tr#${id} > td.${appInfo.rankFieldId}`).css('background', bgColor);
			$(`div#${scoresViewId} tr#${id} > td.${appInfo.rankFieldId} > span`).text(`${scoreInfo.newRank}`);
		}
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

		return sleep(100);	// milliseconds
	}.bind(this);

	this.putRanksToDatabase = async function(scoreInfoMap) {
		for (const [id, scoreInfo] of scoreInfoMap) {
			if (scoreInfo.newRank === scoreInfo.oldRank) {
				continue;
			}
			await this.putRankToDatabase(id, scoreInfo.newRank);
		}
	}.bind(this);

	this.eventHandler = function(event, view /*, record*/) {
		const scoreInfoMap = this.computeScoreInfoMap();

		if (event.type === 'knack-form-submit') {
			setTimeout(() => Knack.showSpinner(), 333);
			this.putRanksToDatabase(scoreInfoMap)
				.then(() => {
					console.log('Database updates for ranking succeeded');
					$(`#${appInfo.lockScoresSubmitForm}`).hide();	// Submit view
					$(`#${appInfo.putRanksResultReport}`).show();	// Result reporting view
					//setTimeout(() => Knack.hideSpinner(), 1);
					Knack.hideSpinner();
					$(`#${appInfo.putRanksResultReport} h2.kn-title`).text('Success!');
					$(`#${appInfo.putRanksResultReport} p.kn-subtitle`).text(
						'The event scores have been submitted and the event is locked.');
				})
				.catch((error) => {
					console.error(`PUT failure: ${error.message}`);
					$(`#${appInfo.lockScoresSubmitForm}`).hide();	// Submit view
					$(`#${appInfo.putRanksResultReport}`).show();	// Result reporting view
					//setTimeout(() => Knack.hideSpinner(), 1);
					Knack.hideSpinner();
					$(`#${appInfo.putRanksResultReport} h2.kn-title`).text(
						'An error occurred while locking the event scores');
					$(`#${appInfo.putRanksResultReport} p.kn-subtitle`).html(`
						Please unlock the event and try again:<br/>
						<ul>
							<li>Go to <i>Scoremaster Home</i></li>
							<li>Click on <i>Event Setup</i></li>
						</ul>
						<br/><br/>Error message: ${error.message}`);
				});
		} else {
			//dumpObject(Knack, 'Knack');
			//dumpObject(Knack.app, 'Knack.app');
			this.updateTeamRanks(scoreInfoMap);
		}
		if (view.key === appInfo.lockScoresScoringGrid) {
			console.log('Hiding the lock-scores scoring grid and the put-ranks result report');
			$(`#${appInfo.lockScoresScoringGrid}`).hide();	// Scores table needed only to force data retrieval
			$(`#${appInfo.putRanksResultReport}`).hide();	// Result reporting view used after locking
		}
	}.bind(this);
}

RankUpdater.hookView = function(scoresViewId, submitViewId) {
	const updater = new RankUpdater(scoresViewId);
	$(document).on(`knack-view-render.${scoresViewId}`, updater.eventHandler);
	$(document).on(`knack-cell-update.${scoresViewId}`, updater.eventHandler);
	if (submitViewId) {
		$(document).on(`knack-form-submit.${submitViewId}`, updater.eventHandler);
	}
};

RankUpdater.hookView(appInfo.esScoringGrid, '');
RankUpdater.hookView(appInfo.scoremasterScoringGrid, '');
RankUpdater.hookView(appInfo.lockScoresScoringGrid, appInfo.lockScoresSubmitForm);



// ====================================================================

function Presenter(ranksViewId, iconViewId) {
	this.ranksViewId = ranksViewId;
	this.iconViewId = iconViewId;
	this.medals = null;
	this.numRanksShowing = 0;

	this.setTeamNameVisibilities = function() {
		for (let i = 0; i < this.medals.length; ++i) {
			const viewId = this.ranksViewId;
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

	this.onClickIcon = function() {
		console.log('In icon click handler');
		++this.numRanksShowing;
		this.setTeamNameVisibilities();
		return false;
	}.bind(this);

	this.hookIconClickEvent = function() {
		const icon = Knack.models[this.iconViewId].attributes[appInfo.iconFieldId];
		if (!icon) {
			console.log('ERROR: Unable to read icon field from view model:');
			console.log(Knack.models[this.iconViewId]);
			return;
		}
		const regexMatch = icon.match(/^<span id="([0-9a-zA-Z]+)"/);
		if (!regexMatch) {
			console.log(`ERROR: Unable to hook icon's click event. icon = '${icon}'`);
			return;
		}
		const iconId = regexMatch[1];
		$(`div#${this.iconViewId} span#${iconId} > img`).on('click', this.onClickIcon);
		console.log('Hooked icon click event');
	}.bind(this);

	this.getMedalList = function() {
		const models = Knack.models[this.ranksViewId].data.models;

		console.log('Presentation grid row models:');
		console.log(models);

		let minRank = Number.MAX_SAFE_INTEGER;
		let maxRank = Number.MIN_SAFE_INTEGER;
		for (let i = 0; i < models.length; ++i) {
			minRank = Math.min(minRank, models[i].attributes[appInfo.rawRankFieldId]);
			maxRank = Math.max(maxRank, models[i].attributes[appInfo.rawRankFieldId]);
		}

		const medals = Array(maxRank - minRank + 1);
		for (let i = 0; i < models.length; ++i) {
			const medalInfo = {
				id: models[i].attributes.id,
				rank: models[i].attributes[appInfo.rawRankFieldId],
				teamName: models[i].attributes[appInfo.rawTeamNameFieldId],
			};
			if (medals[medalInfo.rank - minRank]) {
				throw 'Two teams have the same medal position';
			}
			medals[medalInfo.rank - minRank] = medalInfo;
		}

		console.log('Medal array:');
		console.log(medals);
		return medals;
	}.bind(this);

	this.initializeDisplay = function() {
		// Hide the table page navigation and table header:
		$(`div#${this.ranksViewId} thead`).hide();
		$(`div#${this.ranksViewId} div.kn-records-nav`).hide();

		// Replace ranks numbers with place names:
		for (let i = 0; i < this.medals.length; ++i) {
			const viewId = this.ranksViewId;
			const medal = this.medals[i];
			const rankFieldId = appInfo.rankFieldId;
			const spanElement = $(`div#${viewId} tr#${medal.id} > td.${rankFieldId} > span`);
			spanElement.text(`${medalLabels[medal.rank]}`);
		}

		// Hide the team names:
		this.numRanksShowing = 0;
		this.setTeamNameVisibilities();
	}.bind(this);

	this.nextButtonClickHandler = function(event) {
		event.preventDefault();
		console.log('In OnClick handler');
		alert('In OnClick handler');
		return false;
	}.bind(this);

	this.eventHandler = function(/*event,*/ view /*, record*/) {
		this.hookIconClickEvent();
		this.medals = this.getMedalList();
		this.initializeDisplay();
	}.bind(this);
}

Presenter.hookView = function(ranksViewId, iconViewId) {
	const presenter = new Presenter(ranksViewId, iconViewId);
	$(document).on(`knack-view-render.${ranksViewId}`, presenter.eventHandler);
};

Presenter.hookView(appInfo.presenterGrid, appInfo.iconViewId);
