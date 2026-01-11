/* jshint esnext: false */
/* jshint esversion: 8 */
/* jshint laxbreak: true */
'use strict';

// To-do items:
// - Switch from prototype syntax to classes



// ====================================================================

class AppInfo {
	// Coach LoginLogger
	static get coachLoginViewId() { return AppInfo.#ch('view_39', 'view_39', ''); }
	static get coachLandingSceneId() { return AppInfo.#ch('scene_13', 'scene_13', ''); }
	static get coachUserViewId() { return AppInfo.#ch('view_1793', 'view_2411', ''); }
	static get coachLoginCountFieldId() { return AppInfo.#ch('field_2291', 'field_2401', ''); }
	static get coachLastLoginTimeFieldId() { return AppInfo.#ch('field_2290', 'field_2400', ''); }

	// Event RankUpdater
	static get esScoringGrid() { return 'view_1375'; }
	static get scoremasterEventGrid() { return 'view_1363'; }
	static get lockEventSceneId() { return 'scene_563'; }
	static get lockEventGrid() { return 'view_1380'; }
	static get lockEventSubmitForm() { return 'view_1382'; }
	static get lockEventFinalizeView() { return AppInfo.#ch('view_1531', 'view_1609', 'view_1609'); }

	static get eventAdjScoreFieldId() { return 'field_1736'; }	// 'Raw Scores/Tier Adjusted Score' column
	static get eventStatusFieldId() { return 'field_1731'; }		// 'Raw Scores/Event Special Status' column
	static get eventIsTrialFieldId() { return 'field_1705'; }	// 'Events by Tournament/Trial Event' column
	static get isBestPlacedTrueTeamFieldId() { return AppInfo.#ch('', 'field_2361', 'field_2054'); }	// 'Teams/Best Placed Team Indicator' column
	static get acceptedInviteFieldId() { return AppInfo.#ch('', 'field_2313', ''); }			 				// 'Teams/Reg: Accepted Invite?' column
	static get eventRankFieldId() { return AppInfo.#ch('field_1737', 'field_2027', 'field_1737'); }		// 'Raw Scores/True Rank' column
	static get eventAdjRankFieldId() { return AppInfo.#ch('', 'field_1737', 'field_2048'); }			 	// 'Raw Scores/Adj Rank' column
	static get trophyRankFieldId() { return AppInfo.#ch('', 'field_2382', 'field_2050'); }			 		// 'Teams/Trophy Rank' column
	static get uninvitedRankFieldId() { return AppInfo.#ch('', 'field_2371', ''); }			 				// 'Teams/Uninvited School Rank' column

	static get teamIsExhibitionTeamFieldId() { return AppInfo.#ch('', 'field_1979', 'field_1979'); }	// 'Teams/Exhibition Team' column
	static get teamAdjScoreFieldId() { return 'field_1760'; }	// 'Teams/Tie-Adj Overall Score' column
	static get teamRankFieldId() { return 'field_1900'; }			// 'Teams/Rank' column

	// Track Overview RankUpdaters (Division Overview in ScoreScope)
	static get trackOverviewTeamBeforeGrid() { return AppInfo.#ch('', 'view_2272', 'view_1897'); }
	static get trackOverviewSchoolGrid() { return AppInfo.#ch('', 'view_2276', 'view_1896'); }
	static get trackOverviewLockSceneId() { return AppInfo.#ch('', 'scene_788', 'scene_702'); }
	static get trackOverviewLockGrid() { return AppInfo.#ch('', 'view_2280', 'view_1905'); }
	static get trackOverviewSubmitForm() { return AppInfo.#ch('', 'view_2282', 'view_1906'); }
	static get trackOverviewFinalizeView() { return AppInfo.#ch('', 'view_2281', 'view_1907'); }

	// Award Background
	static get presenterTournamentSelectionSceneId() { return 'scene_587'; }
	static get scoremasterSceneId() { return 'scene_546'; }
	static get adminSceneId() { return 'scene_69'; }

	// Award Background
	static get presenterEventAwardSceneId() { return AppInfo.#ch('scene_617', 'scene_606', 'scene_606'); }
	static get presenterEventIconViewId() { return AppInfo.#ch('view_1538', 'view_1521', ''); }
	static get eventIconFieldId() { return 'field_1712'; }			 		// Events - General/Event Icon
	static get presenterEventSelectionBSceneId() { return AppInfo.#ch('', 'scene_638', 'scene_638'); }
	static get oneBTrackBtnGrid() { return AppInfo.#ch('', 'view_2311', 'view_1909'); }	// "1 B Track" Tournament Trophies on "Present B Results" page
	static get presenterEventSelectionCSceneId() { return AppInfo.#ch('', 'scene_642', 'scene_642'); }
	static get oneCTrackBtnGrid() { return AppInfo.#ch('', 'view_2323', 'view_1916'); }	// "1 C Track" Tournament Trophies on "Present C Results" page
	static get presenterEventSelectionAllSceneId() { return AppInfo.#ch('scene_616', 'scene_605', 'scene_605'); }
	static get threeTracksBtnGrid() { return AppInfo.#ch('', 'view_2308', ''); }	// "3 tracks" Tournament Trophies on "Present Tournament" page
	static get oneTrackTrophySceneId() { return AppInfo.#ch('', 'scene_794', 'scene_704'); }
	static get twoTrackTrophySceneId() { return AppInfo.#ch('', 'scene_797', 'scene_705'); }
	static get statesBoundBSceneId() { return AppInfo.#ch('', 'scene_799', ''); }
	static get statesBoundCSceneId() { return AppInfo.#ch('', 'scene_800', ''); }

	static get awardBackgroundUrl() {
		return AppInfo.#ch(
			'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg',
			'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg',
			'https://static.wixstatic.com/shapes/78a71f_ca485e8df91e4837a83c85af6bae7814.svg');
	}

	// Presenter
	static get teamNameFieldId() { return 'field_1202'; }			// 'Teams/Award Ceremony Team Name' column
	static get awardCeremonyTrophyNameFieldId() { return AppInfo.#ch('', 'field_1862', 'field_2069'); }
																					// 'School/Award Ceremony Name' column in BC portal
																					// 'Teams/Award Ceremony Trophy Name' column in ScoreScope
																					// Not used in Div. A portal

	static get eventPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('view_1542', 'view_1545', 'view_1545'),
			awardeeNameFieldId: AppInfo.teamNameFieldId,
			goldBidIndicatorFieldId: AppInfo.#ch('', 'field_2028', ''),
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('view_1539', 'view_1522', 'view_1522'),
					// BC uses AdjRank for gold bids. A uses plain rank, since there are
					// no gold bids there. In ScoreScope, the Knack-based logic removes
					// all the exhibition teams from the list, but we must use AdjRank
					// so we don't end up with skipped medals.
					rankFieldId: AppInfo.#ch(AppInfo.eventRankFieldId, AppInfo.eventAdjRankFieldId,
						AppInfo.eventAdjRankFieldId),
				}
			]
		};
	}

	// Trophy Presenters
	static get oneTrackTrophyPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_2316', 'view_1915'),
			awardeeNameFieldId: AppInfo.awardCeremonyTrophyNameFieldId,
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_2313', 'view_1913'),
					rankFieldId: AppInfo.trophyRankFieldId,
				}
			]
		};
	}
	static get twoTrackTrophyPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_2334', 'view_1924'),
			awardeeNameFieldId: AppInfo.awardCeremonyTrophyNameFieldId,
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_2331', 'view_1921'),
					rankFieldId: AppInfo.trophyRankFieldId,
				},
				{
					awardGrid: AppInfo.#ch('', 'view_2332', 'view_1922'),
					rankFieldId: AppInfo.trophyRankFieldId,
				}
			]
		};
	}

	// States-bound schools presenters
	static get divBStatesBoundSchoolsPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_2378', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_2341', ''),
					rankFieldId: '',
				},
				{
					awardGrid: AppInfo.#ch('', 'view_2371', ''),
					rankFieldId: '',
				}
			]
		};
	}
	static get divCStatesBoundSchoolsPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_2379', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_2374', ''),
					rankFieldId: '',
				},
				{
					awardGrid: AppInfo.#ch('', 'view_2375', ''),
					rankFieldId: '',
				}
			]
		};
	}

	// "ch" is short for "choose"
	static #ch(aValue, bcValue, ssValue) {
		switch (Knack.application_id.toLowerCase()) {
			case '64ca43965ac49100285bcd41': // Division A Portal
				return aValue;
			case '648d0fcf2458250028b97840': // Division BC Portal
				return bcValue;
			case '652ead5e0d05db00275daab7': // ScoreScope
				return ssValue;
			case '69245019ba2963d92c559076': // Alt. ScoreScope
				return ssValue;
			default:
				throw new Error('Unrecognized portal: Not Div A, Div BC, or ScoreScope');
		}
	}
}



// ====================================================================

class ViewBasedApiPut {
	static #sleep(timeInMillis) {
		return new Promise(resolve => setTimeout(resolve, timeInMillis));
	}

	static #getPlanLimitRemaining(hdrs) {
		const hdrStr = hdrs.get("X-PlanLimit-Remaining");
		const result = (hdrStr ? Number(hdrStr) : Number.MAX_SAFE_INTEGER);
		console.log(`X-PlanLimit-Remaining = '${hdrStr}', ${result}`);
		return result;
	}

	// Returns the number of milliseconds to wait before retrying, or zero if success (no retry needed), or throws
	static async #put(url, options) {
		const response = await fetch(url, options);	// returns response
		const hdrs = response.headers;
		if (response.ok) {
			console.log(`PUT rank: response.ok`);
			return 0;
		} else if (response.status != 429) {	// Status 429 is Too Many Requests
			const text = await response.text();
			console.log(`PUT rank: HTTP response code ${response.status}, response text '${text}'`);
			throw new Error(`HTTP response code ${response.status}, response text '${text}'`);
		} else if (ViewBasedApiPut.#getPlanLimitRemaining(hdrs) <= 0) {	// Exceeding Knack's daily plan limit
			console.log(`PUT rank: Exceeded Knack API plan limit`);
			const planLimit = Number(hdrs.get("X-PlanLimit-Limit"));
			const planLimitReset = Number(hdrs.get("X-PlanLimit-Reset"));
			throw new Error(`Exceeded Knack API plan limit (${planLimit} requests per day). Will reset in ${planLimitReset} milliseconds.`);
		} else {
			// Exceeded Knack's API rate limit
			const rateLimitReset = Number(hdrs.get("X-RateLimit-Reset"));
			const milliSecToWait = (1000 * rateLimitReset) - Date.now() + 1;
			console.log(`PUT rank: Exceeded Knack API rate limit. Waiting ${milliSecToWait} milliseonds for reset`);
			return milliSecToWait;
		}
	}

	static async putWithRetry(sceneId, viewId, id, optionsBody) {
		const url = `${Knack.api_url}/v1/pages/${sceneId}/views/${viewId}/records/${id}`;
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'X-Knack-Application-ID': Knack.application_id,
				'X-Knack-REST-API-Key': 'knack',
				'Authorization': Knack.getUserToken(),
			},
			body: JSON.stringify(optionsBody),
		};
		// console.log(`Put rank URL: ${url}`);
		// console.log('options:');
		// console.log(options);

		let milliSecToWait = await ViewBasedApiPut.#put(url, options);
		if (milliSecToWait <= 0) {
			return;
		}

		console.log(`Put rank first retry, milliSecToWait = ${milliSecToWait}`);
		await ViewBasedApiPut.#sleep(milliSecToWait);
		milliSecToWait = await ViewBasedApiPut.#put(url, options);
		if (milliSecToWait <= 0) {
			return;
		}

		milliSecToWait = 1100;
		console.log(`Put rank second retry, milliSecToWait = ${milliSecToWait}`);
		await ViewBasedApiPut.#sleep(milliSecToWait);
		milliSecToWait = await ViewBasedApiPut.#put(url, options);
		if (milliSecToWait <= 0) {
			return;
		}

		throw new Error(`Exceeded Knack API rate limit, but waiting hasn't helped`);
	}

	static setSpinner() {
		// Show a spinner after a third of a second:
		setTimeout(() => Knack.showSpinner(), 333);
	}

	static cancelSpinner() {
		// For immediate effect:
		Knack.hideSpinner();
		// To ensure cancel in cases where we reach the line above before
		// the preceeding setSpinner() call's 333 milliseconds has expired:
		setTimeout(() => Knack.hideSpinner(), 500);
	}
}



// ====================================================================

class LoginLogger {
	#loginViewId;
	#landingSceneId;
	#userDetailsViewId;
	#loginCountFieldId;
	#lastLoginTimeFieldId;
	#isLandingDueToLogin;

	constructor(loginViewId, landingSceneId, userDetailsViewId, loginCountFieldId, lastLoginTimeFieldId) {
		this.#loginViewId = loginViewId;
		this.#landingSceneId = landingSceneId;
		this.#userDetailsViewId = userDetailsViewId;
		this.#loginCountFieldId = loginCountFieldId;
		this.#lastLoginTimeFieldId = lastLoginTimeFieldId;
		this.#isLandingDueToLogin = false;

		if (this.#loginViewId && this.#landingSceneId && this.#userDetailsViewId) {
			$(document).on(`knack-scene-render.${this.#landingSceneId}`,
				this.sceneRenderHandler.bind(this));
			$(document).on(`knack-view-render.${this.#loginViewId}`,
				this.loginViewRenderHandler.bind(this));
			$(document).on(`knack-view-render.${this.#userDetailsViewId}`,
				this.userDetailsViewRenderHandler.bind(this));
		}
	}

	sceneRenderHandler(/* event, view, record*/) {
		$(`#${this.#userDetailsViewId}`).hide();
	}

	loginViewRenderHandler(/*event, view, record*/) {
		this.#isLandingDueToLogin = false;
		$('input[type="submit"]').click(this.onClickLogin.bind(this));
	}

	onClickLogin(event) {
		event.preventDefault();
		this.#isLandingDueToLogin = true;
		$('form').submit();
	}

	async userDetailsViewRenderHandler(/*event, view, record*/) {
		if (this.#isLandingDueToLogin) {
			this.#isLandingDueToLogin = false;

			const attributes = Knack.models[this.#userDetailsViewId].attributes;
			console.log('user view attributes:');
			console.log(attributes);

			const id = attributes.id;
			const oldCount = attributes[this.#loginCountFieldId];
			const newCount = (typeof oldCount !== 'number') ? 1 : (oldCount + 1);
			const dateFormat = {
				hour12: true,
				timeZone: 'America/New_York'
			};
			const newLoginTime = new Date().toLocaleString('en-US', dateFormat)
				.replace(',', '');	// Knack doesn't like the comma between date and time

			const optionsBody = {
				[this.#loginCountFieldId]:		newCount,
				[this.#lastLoginTimeFieldId]:	newLoginTime
			};
			ViewBasedApiPut.setSpinner();
			try {
				const startTime = Date.now();
				await ViewBasedApiPut.putWithRetry(this.#landingSceneId,
					this.#userDetailsViewId, id, optionsBody);
				const elapsedTime = (Date.now() - startTime) / 1000.0;
				console.log(`Database update for login logging succeeded in ${elapsedTime} sec`);
			} catch (error) {
				console.log(`Database updates for ranking failed: ${error.message}`);
			} finally {
				ViewBasedApiPut.cancelSpinner();
			}
		}
	}
}

const coachLoginLogger = new LoginLogger(AppInfo.coachLoginViewId,
	AppInfo.coachLandingSceneId, AppInfo.coachUserViewId,
	AppInfo.coachLoginCountFieldId, AppInfo.coachLastLoginTimeFieldId);



// ====================================================================

// Rank: The true rank that the team earned, regardless of exhibitions teams.
//
// Adjusted Rank: This is the adjusted rank towards the team's overall
// score that this event/score earns. If exhibition teams are participating,
// for example, this may not equal the rank. It could also be thought of as
// the number of points earned when there are exhibition teams.
class RankUpdater {
	#gridId;
	#sceneId;
	#lockSubmitForm;
	#finalizeBtnViewId;
	#scoreFieldId;
	#rankFieldId;
	#adjRankFieldId;
	#trophyRankFieldId;
	#uninvitedRankFieldId;
	#statusFieldId;
	#isEventRanker;
	#scoreInfos;
	#rankStorageInProgress;

	constructor(gridId, sceneId, lockSubmitForm, finalizeBtnViewId, scoreFieldId,
			rankFieldId, adjRankFieldId, trophyRankFieldId, uninvitedRankFieldId,
			statusFieldId, isEventRanker) {
		this.#gridId = gridId;
		this.#sceneId = sceneId;
		this.#lockSubmitForm = lockSubmitForm;
		this.#finalizeBtnViewId = finalizeBtnViewId;
		this.#scoreFieldId = scoreFieldId;
		this.#rankFieldId = rankFieldId;
		this.#adjRankFieldId = adjRankFieldId;
		this.#trophyRankFieldId = trophyRankFieldId;
		this.#uninvitedRankFieldId = uninvitedRankFieldId;
		this.#statusFieldId = statusFieldId;
		this.#isEventRanker = isEventRanker;
		this.#scoreInfos = null;
		this.#rankStorageInProgress = false;

		if (this.#gridId) {
			if (this.#sceneId && this.#lockSubmitForm && this.#finalizeBtnViewId) {
				$(document).on(`knack-scene-render.${this.#sceneId}`, this.sceneRenderHandler.bind(this));
			}
			$(document).on(`knack-view-render.${this.#gridId}`, this.rankUpdateHandler.bind(this));
			$(document).on(`knack-cell-update.${this.#gridId}`, this.rankUpdateHandler.bind(this));
		}
	}

	#getStatus(model) {
		if (this.#statusFieldId) {
			const statusField = model.attributes[this.#statusFieldId + '_raw'];
			return (statusField.length > 0) ? statusField[0].identifier : '';
		} else {
			return '';
		}
	}

	// In the BC portal, this really means "is gold bid team,"
	// but in ScoreScope it means a true exhibition team, e.g.,
	// a Fairfax team at the Fairfax invitational.
	#isExhibitionTeam(model) {
		if (!AppInfo.teamIsExhibitionTeamFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, AppInfo.teamIsExhibitionTeamFieldId)) {
			// The ES scoring grid will use this option, because the grid doesn't
			// have an exhibition column. This is on purpose, because we don't want
			// the ES to have to understand about exhibition teams. The end result
			// will be a straight-up ranking of all teams without regard for
			// exhibition status.
			return false;
		} else {
			const rawFieldId = AppInfo.teamIsExhibitionTeamFieldId + '_raw';
			return model.attributes[rawFieldId] === true;
		}
	}

	#isTrialEvent(model) {
		if (!AppInfo.eventIsTrialFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, AppInfo.eventIsTrialFieldId)) {
			// For the ES scoring grid, which doesn't have this column
			return false;
		} else {
			const rawFieldId = AppInfo.eventIsTrialFieldId + '_raw';
			return model.attributes[rawFieldId] === true;
		}
	}

	// True if this team has the best team score among the teams from the same school.
	// This team serves as the representative of the school when we list school rankings.
	#isBestPlacedTrueTeam(model) {
		if (!AppInfo.isBestPlacedTrueTeamFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, AppInfo.isBestPlacedTrueTeamFieldId)) {
			return false;
		} else {
			const rawFieldId = AppInfo.isBestPlacedTrueTeamFieldId + '_raw';
			return model.attributes[rawFieldId] === 0;
		}
	}

	// True if this school was given an invite to states and accepted
	// that invite by attending the national-ready regional.
	#acceptedInvite(model) {
		if (!AppInfo.acceptedInviteFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, AppInfo.acceptedInviteFieldId)) {
			return false;
		} else {
			const rawFieldId = AppInfo.acceptedInviteFieldId + '_raw';
			return model.attributes[rawFieldId] !== 0;
		}
	}

	#getRankFieldValue(model, rankFieldId) {
		const rawRankFieldId = rankFieldId + '_raw'
		if (!rankFieldId) {
			return -1;
		} else if (!Object.hasOwn(model.attributes, rawRankFieldId)) {
			return -1; // for grids w/o this rank column
		} else {
			return model.attributes[rawRankFieldId];
		}
	}

	#createScoreInfo(model) {
		return {
			id: model.attributes.id,
			adjScore: model.attributes[this.#scoreFieldId + '_raw'],
			status: this.#getStatus(model),
			isExhibition: this.#isExhibitionTeam(model),
			isTrialEvent: this.#isTrialEvent(model),
			isBestPlacedTrueTeam: this.#isBestPlacedTrueTeam(model),
			acceptedInvite: this.#acceptedInvite(model),
			oldRank: this.#getRankFieldValue(model, this.#rankFieldId),
			newRank: -1,
			oldAdjRank: this.#getRankFieldValue(model, this.#adjRankFieldId),
			newAdjRank: -1,
			oldTrophyRank: this.#getRankFieldValue(model, this.#trophyRankFieldId),
			newTrophyRank: -1,
			oldUninvitedRank: this.#getRankFieldValue(model, this.#uninvitedRankFieldId),
			newUninvitedRank: -1,
		};
	}

	// A cluster in this context is one non-exhibition team together with
	// any exhibition teams that score better than, and adjacent to, that
	// non-exhibition team.
	#computeRankClusters(scoreInfos, adjustForExhibition) {
		const flaggedScores = scoreInfos
			.map((scoreInfo) => {
				return {
					score: scoreInfo.adjScore,
					isExhibition: (adjustForExhibition && scoreInfo.isExhibition),
				};
			})
			.sort((lhs, rhs) => this.#isEventRanker
				? (rhs.score - lhs.score)
				: (lhs.score - rhs.score));
		const rankClusters = [];
		let currentCluster = [];
		let lastScoreWasExhibition = true;
		for (const flaggedScore of flaggedScores) {
			if (!lastScoreWasExhibition) {
				rankClusters.push(currentCluster);
				currentCluster = [];
			}
			currentCluster.push(flaggedScore.score);
			lastScoreWasExhibition = flaggedScore.isExhibition;
		}
		if (currentCluster.length > 0) {
			rankClusters.push(currentCluster);
		}
		return rankClusters;
	}

	#countNonExhibitionTeams(scoreInfos) {
		let numNonExhibitionTeams = 0;
		for (const scoreInfo of scoreInfos) {
			if (!scoreInfo.isExhibition) {
				++numNonExhibitionTeams;
			}
		}
		return numNonExhibitionTeams;
	}

	#computeRank(scoreInfo, numTeams, clusters) {
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
	}

	// Takes two ScoreInfo instances and returns neg, 0,
	// or pos according to their team rank sort order.
	#teamRankComparitor(lhs, rhs) {
		if (lhs.isExhibition && !rhs.isExhibition) {
			return 1;
		} else if (!lhs.isExhibition && rhs.isExhibition) {
			return -1;
		} else {
			return lhs.adjScore - rhs.adjScore;
		}
	}

	// Calling
	//    #indexOf(scoreInfos, toFind, predicate)
	// is similar to
	//    scoreInfos.#indexOf(toFind)
	// except that rather than using comparison by strict equality, this
	// #indexOf variant is looking for the element x where
	//    predicate(x, toFind)
	// returns true.
	#indexOf(scoreInfos, toFind, predicate) {
		for (let i = 0; i < scoreInfos.length; ++i) {
			if (predicate(toFind, scoreInfos[i])) {
				return i;
			}
		}
		return -1;
	}

	#rankTeamsExhibitionAdjusted(scoreInfos) {
		// Compute the true ranks, with exhibition teams at the end:
		const rankOrderedScoreInfos = scoreInfos.toSorted(this.#teamRankComparitor);
		for (const si of scoreInfos) {
			si.newRank = 1 + this.#indexOf(rankOrderedScoreInfos, si,
				(lhs, rhs) => this.#teamRankComparitor(lhs, rhs) == 0);
		}

		// Compute trophy ranks on school-representative teams:
		const rankOrderedTrophyScoreInfos = rankOrderedScoreInfos
			.filter((si) => si.isBestPlacedTrueTeam);
		for (const si of scoreInfos) {
			const index = this.#indexOf(rankOrderedTrophyScoreInfos, si,
				(lhs, rhs) => this.#teamRankComparitor(lhs, rhs) == 0);
			si.newTrophyRank = (!si.isBestPlacedTrueTeam || index < 0)
				? '' : (index + 1);
		}

		// Compute uninvited school ranks:
		const rankOrderedUninvitedScoreInfos = rankOrderedTrophyScoreInfos
			.filter((si) => !si.acceptedInvite);
		for (const si of scoreInfos) {
			const index = this.#indexOf(rankOrderedUninvitedScoreInfos, si,
				(lhs, rhs) => this.#teamRankComparitor(lhs, rhs) == 0);
			si.newUninvitedRank = (!si.isBestPlacedTrueTeam || si.acceptedInvite || index < 0)
				? '' : (index + 1);
		}
	}

	#computeScoreInfoList() {
		const models = Knack.models[this.#gridId].data.models;
		console.log('Grid row models:');
		console.log(models);

		const scoreInfos = models.map((model) => this.#createScoreInfo(model));

		if (this.#isEventRanker) {
			if (scoreInfos[0].oldRank !== -1) {	// -1 means there is no true rank in this grid
				const rankClusters = this.#computeRankClusters(scoreInfos, false);
				const numTeams = scoreInfos.length;
				for (const scoreInfo of scoreInfos) {
					scoreInfo.newRank = this.#computeRank(scoreInfo, numTeams, rankClusters);
				}
			}

			if (scoreInfos[0].oldAdjRank !== -1) {	// -1 means there is no adjusted rank in this grid
				// Exhibition teams may compete in trial events, but
				// in such cases they are not considered exhibition teams:
				const adjustForExhibition = !scoreInfos[0].isTrialEvent;
				const adjRankClusters = this.#computeRankClusters(scoreInfos, adjustForExhibition);
				const numTeams = adjustForExhibition
					? this.#countNonExhibitionTeams(scoreInfos)
					: scoreInfos.length;
				for (const scoreInfo of scoreInfos) {
					scoreInfo.newAdjRank = this.#computeRank(scoreInfo, numTeams, adjRankClusters);
				}
			}
		} else {
			this.#rankTeamsExhibitionAdjusted(scoreInfos);
		}

		console.log('Score info list:');
		console.log(scoreInfos);
		return scoreInfos;
	}

	#computeRankHistogram(scoreInfos) {
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
	}

	#getRankCellBackgroundColor(scoreInfo, rankHistogram) {
		if (scoreInfo.status) {
			return ''; // default color for special statuses
		} else if (rankHistogram.has(scoreInfo.newRank)
				&& rankHistogram.get(scoreInfo.newRank) > 1) {
			return '#fbe9c2'; // yellow for ties
		} else {
			return ''; // default color otherwise
		}
	}

	#getOtherRankCellBackgroundColor(scoreInfo) {
		if (scoreInfo.status) {
			return ''; // default color for special statuses
		} else if (scoreInfo.isExhibition && !scoreInfo.isTrialEvent) {
			return '#9db0c5'; // greyish blue for exhibition teams in non-trial events
		} else {
			return ''; // default color otherwise
		}
	}

	#getDisplayRank(scoreInfo, rankProperty) {
		return scoreInfo.status
			? '' // Rank of a special status is not meaningful to users
			: scoreInfo[rankProperty];
	}

	// "Other" ranks are adjusted ranks, trophy ranks, and uninvited ranks
	#updateDisplayedOtherRanks(scoreInfo, rankFieldId, rankPropName) {
		const rank = this.#getDisplayRank(scoreInfo, rankPropName);
		if (rankFieldId && rank >= 0) {
			const bg = this.#getOtherRankCellBackgroundColor(scoreInfo);
			$(`div#${this.#gridId} tr#${scoreInfo.id} > td.${rankFieldId}`).css('background', bg);
			$(`div#${this.#gridId} tr#${scoreInfo.id} > td.${rankFieldId} > span`).text(`${rank}`);
		}
	}

	#updateDisplayedRanks(scoreInfos) {
		for (const scoreInfo of scoreInfos) {
			const rank = this.#getDisplayRank(scoreInfo, 'newRank');
			if (this.#rankFieldId && rank >= 0) {
				const rankHistogram = this.#computeRankHistogram(scoreInfos);
				const bg = this.#getRankCellBackgroundColor(scoreInfo, rankHistogram);
				$(`div#${this.#gridId} tr#${scoreInfo.id} > td.${this.#rankFieldId}`).css('background', bg);
				$(`div#${this.#gridId} tr#${scoreInfo.id} > td.${this.#rankFieldId} > span`).text(`${rank}`);
			}
			this.#updateDisplayedOtherRanks(scoreInfo, this.#adjRankFieldId, 'newAdjRank');
			this.#updateDisplayedOtherRanks(scoreInfo, this.#trophyRankFieldId, 'newTrophyRank');
			this.#updateDisplayedOtherRanks(scoreInfo, this.#uninvitedRankFieldId, 'newUninvitedRank');
		}
	}

	async #putRanksToDatabase(scoreInfos) {
		for (const scoreInfo of scoreInfos) {
			if (scoreInfo.newRank === scoreInfo.oldRank
				&& scoreInfo.newAdjRank === scoreInfo.oldAdjRank
				&& scoreInfo.newTrophyRank === scoreInfo.oldTrophyRank
				&& scoreInfo.newUninvitedRank === scoreInfo.oldUninvitedRank) {
				continue;
			}
			const optionsBody = {};
			if (this.#rankFieldId) {
				optionsBody[this.#rankFieldId] = scoreInfo.newRank;
			}
			if (this.#adjRankFieldId) {
				optionsBody[this.#adjRankFieldId] = scoreInfo.newAdjRank;
			}
			if (this.#trophyRankFieldId) {
				optionsBody[this.#trophyRankFieldId] = scoreInfo.newTrophyRank;
			}
			if (this.#uninvitedRankFieldId) {
				optionsBody[this.#uninvitedRankFieldId] = scoreInfo.newUninvitedRank;
			}
			await ViewBasedApiPut.putWithRetry(this.#sceneId, this.#gridId, scoreInfo.id, optionsBody);
		}
	}

	async finalizeBtnClickHandler() {
		if (this.#rankStorageInProgress) {
			return;
		}
		$(`#${this.#lockSubmitForm} div#kn-input-`).show(); // Result report - Please Wait
		ViewBasedApiPut.setSpinner();
		this.#rankStorageInProgress = true;
		try {
			const startTime = Date.now();
			await this.#putRanksToDatabase(this.#scoreInfos);
			const elapsedTime = (Date.now() - startTime) / 1000.0;
			console.log(`Database updates for ranking succeeded in ${elapsedTime} sec`);

			$(`#${this.#lockSubmitForm} div#kn-input- h3.kn-title`).text('Success!');
			const label = this.#isEventRanker ? 'event' : 'tournament';
			$(`#${this.#lockSubmitForm} div#kn-input- p.kn-description`).html(`
			The scores and ranks have been finalized. Press the button to<br/>
			lock the ${label} and submit it for presentation.`);
			$(`div#${this.#finalizeBtnViewId}`).hide(); // Finalize button
			$(`#${this.#lockSubmitForm} div.kn-submit`).show(); // Submit button
		} catch (error) {
			console.log(`Database updates for ranking failed: ${error.message}`);
			$(`#${this.#lockSubmitForm} div#kn-input- h3.kn-title`).text('An error occurred');
			$(`#${this.#lockSubmitForm} div#kn-input- p.kn-description`).html(`
			Please wait a moment or two and press the Finalize button again.
			<br/><br/>Error message: ${error.message}`);
		} finally {
			ViewBasedApiPut.cancelSpinner();
			this.#rankStorageInProgress = false;
		}
	}

	rankUpdateHandler( /* event, view, record*/) {
		this.#scoreInfos = this.#computeScoreInfoList();
		this.#updateDisplayedRanks(this.#scoreInfos);
	}

	sceneRenderHandler( /* event, view, record*/) {
		if (this.#isEventRanker) {
			// For the event ranker on the lock scores page, the scores table is needed
			// only to force data retrieval, so we hide it. But on the team lock scores
			// page, this table is the only way to see all the ranks computed, so we
			// label it "for programmers only" and leave it showing.
			$(`#${this.#gridId}`).hide();
		}
		$(`#${this.#lockSubmitForm} div#kn-input-`).hide(); // Result report
		$(`#${this.#lockSubmitForm} div.kn-submit`).hide(); // Submit button
		$(`div#${this.#finalizeBtnViewId} svg`).on('click', this.finalizeBtnClickHandler.bind(this));
	}
}

const esUpdater = new RankUpdater(AppInfo.esScoringGrid, '', '', '',
	AppInfo.eventAdjScoreFieldId, AppInfo.eventRankFieldId, AppInfo.eventAdjRankFieldId,
	'', '', AppInfo.eventStatusFieldId, true);
const scoremasterEventUpdater = new RankUpdater(AppInfo.scoremasterEventGrid, '', '', '',
	AppInfo.eventAdjScoreFieldId, AppInfo.eventRankFieldId, AppInfo.eventAdjRankFieldId,
	'', '', AppInfo.eventStatusFieldId, true);
const lockEventUpdater = new RankUpdater(AppInfo.lockEventGrid, AppInfo.lockEventSceneId,
	AppInfo.lockEventSubmitForm, AppInfo.lockEventFinalizeView,
	AppInfo.eventAdjScoreFieldId, AppInfo.eventRankFieldId, AppInfo.eventAdjRankFieldId,
	'', '', AppInfo.eventStatusFieldId, true);

const trackOverviewTeamBeforeUpdater = new RankUpdater(
	AppInfo.trackOverviewTeamBeforeGrid, '', '', '', AppInfo.teamAdjScoreFieldId,
	AppInfo.teamRankFieldId, '', '', '', '', false);
const trackOverviewSchoolUpdater = new RankUpdater(AppInfo.trackOverviewSchoolGrid,
	'', '', '', AppInfo.teamAdjScoreFieldId, AppInfo.teamRankFieldId, '',
	'', '', '', false);
const trackOverviewLockUpdater = new RankUpdater(AppInfo.trackOverviewLockGrid,
	AppInfo.trackOverviewLockSceneId, AppInfo.trackOverviewSubmitForm,
	AppInfo.trackOverviewFinalizeView, AppInfo.teamAdjScoreFieldId,
	AppInfo.teamRankFieldId, '', AppInfo.trophyRankFieldId, AppInfo.uninvitedRankFieldId,
	'', false);



// ====================================================================

class AwardBackground {
	#awardSceneId;
	#iconViewId;
	#iconFieldId;
	#buttonGridViewId;
	#backgroundUrl;

	constructor(awardSceneId, iconViewId, iconFieldId, buttonGridViewId, backgroundUrl) {
		this.#awardSceneId = awardSceneId;
		this.#iconViewId = iconViewId;
		this.#iconFieldId = iconFieldId;
		this.#buttonGridViewId = buttonGridViewId;
		this.#backgroundUrl = backgroundUrl;

		if (this.#awardSceneId) {
			$(document).on(`knack-scene-render.${this.#awardSceneId}`,
				this.awardSceneRenderHandler.bind(this));
		}
	}

	#setBackground(image, repeat, size, position) {
		const mainDiv = $('div#knack-dist_1 > div.kn-scenes.kn-section');
		mainDiv.css('background-image', image);
		mainDiv.css('background-repeat', repeat);
		mainDiv.css('background-size', size);
		mainDiv.css('background-position', position);
	}

	awardSceneRenderHandler(/*event, view, record*/) {
		// Hide "Showing i - j of k" everywhere it appears in the scene:
		$(`div.kn-entries-summary`).hide();

		// Certain grid views containing buttons have unwanted borders:
		if (this.#buttonGridViewId) {
			const buttonGridCells = $(`div#${this.#buttonGridViewId} > div.kn-table-wrapper > table th,td`);
			buttonGridCells.css('border-bottom-width', '0px');
		}

		if (this.#iconViewId && this.#backgroundUrl) {
			const rawIconFieldId = this.#iconFieldId + '_raw';
			const eventIconUrl = Knack.models[this.#iconViewId].attributes[rawIconFieldId];
			const cssImageValue = `url("${eventIconUrl}"), url("${this.#backgroundUrl}")`;
			this.#setBackground(cssImageValue, 'no-repeat, no-repeat', '150px 150px, cover',
				'top 40px right 50px, top left');

			// Hide Knack's icon:
			$(`div#${this.#iconViewId} div.${this.#iconFieldId}_thumb_1`).hide();
		} else if (this.#backgroundUrl) {
			const cssImageValue = `url("${this.#backgroundUrl}")`;
			this.#setBackground(cssImageValue, 'no-repeat', 'cover', 'top left');
		} else {
			this.#setBackground('', '', '', '');
		}
	}
}

const adminAwardBackground = new AwardBackground(
	AppInfo.adminSceneId, '', '', '', '');
const scoremasterAwardBackground = new AwardBackground(
	AppInfo.scoremasterSceneId, '', '', '', '');
const tournamentSelectionAwardBackground = new AwardBackground(
	AppInfo.presenterTournamentSelectionSceneId, '', '', '', '');
const eventSelectionBAwardBackground = new AwardBackground(
	AppInfo.presenterEventSelectionBSceneId, '', '', AppInfo.oneBTrackBtnGrid, AppInfo.awardBackgroundUrl);
const oneTrackTrophyAwardBackground = new AwardBackground(
	AppInfo.oneTrackTrophySceneId, '', '', '', AppInfo.awardBackgroundUrl);
const eventSelectionCAwardBackground = new AwardBackground(
	AppInfo.presenterEventSelectionCSceneId, '', '', AppInfo.oneCTrackBtnGrid, AppInfo.awardBackgroundUrl);
const eventSelectionAllAwardBackground = new AwardBackground(
	AppInfo.presenterEventSelectionAllSceneId, '', '', AppInfo.threeTracksBtnGrid, AppInfo.awardBackgroundUrl);
const eventAwardBackground = new AwardBackground(
	AppInfo.presenterEventAwardSceneId, AppInfo.presenterEventIconViewId,
	AppInfo.eventIconFieldId, '', AppInfo.awardBackgroundUrl);
const twoTrackTrophyAwardBackground = new AwardBackground(
	AppInfo.twoTrackTrophySceneId, '', '', '', AppInfo.awardBackgroundUrl);
const statesBoundBAwardBackground = new AwardBackground(
	AppInfo.statesBoundBSceneId, '', '', '', AppInfo.awardBackgroundUrl);
const statesBoundCAwardBackground = new AwardBackground(
	AppInfo.statesBoundCSceneId, '', '', '', AppInfo.awardBackgroundUrl);



// ====================================================================

// presenterParams is an object of this form:
// 	{
// 		nextBtnViewId: '',
//			awardeeNameFieldId: '',
//			goldBidIndicatorFieldId: '',
// 		nextShowsWholeGrid: true/false,
// 		gridDefinitions: [ gridDef1, ... ]
// 	}
// Where each item in gridDefinitions is an object of this form:
// 	{
// 		awardGrid: '';
// 		rankFieldId: '';
// 	}
// The Presenter will add the fields 'medals', 'bestRankShowing', 'numRows',
// and 'isGridShowing' to the grid definition structures dynamically.

class Presenter {
	#nextBtnViewId;
	#awardeeNameFieldId;
	#goldBidIndicatorFieldId;
	#nextShowsWholeGrid;
	#gridDefinitions;

	constructor(presenterParams) {
		this.#nextBtnViewId = presenterParams.nextBtnViewId;
		this.#awardeeNameFieldId = presenterParams.awardeeNameFieldId;
		this.#goldBidIndicatorFieldId = presenterParams.goldBidIndicatorFieldId;
		this.#nextShowsWholeGrid = presenterParams.nextShowsWholeGrid;
		this.#gridDefinitions = presenterParams.gridDefinitions;

		for (const gridDef of this.#gridDefinitions) {
			if (gridDef.awardGrid) {
				$(document).on(`knack-view-render.${gridDef.awardGrid}`,
					this.gridRenderHandler.bind(this));
			}
		}
		if (this.#nextBtnViewId) {
			$(document).on(`knack-view-render.${this.#nextBtnViewId}`,
				this.nextBtnRenderHandler.bind(this));
		}
	}

	get #medalLabels() {
		return [
			'0<sup>th</sup>',
			'1<sup>st</sup>',
			'2<sup>nd</sup>',
			'3<sup>rd</sup>',
			'4<sup>th</sup>',
			'5<sup>th</sup>',
			'6<sup>th</sup>',
			'7<sup>th</sup>',
			'8<sup>th</sup>',
			'9<sup>th</sup>',
			'10<sup>th</sup>',
			'11<sup>th</sup>',
			'12<sup>th</sup>',
			'13<sup>th</sup>',
			'14<sup>th</sup>',
			'15<sup>th</sup>',
			'16<sup>th</sup>',
			'17<sup>th</sup>',
			'18<sup>th</sup>',
			'19<sup>th</sup>',
			'20<sup>th</sup>',
		];
	}

	#setGridVisibilities() {
		for (const gridDef of this.#gridDefinitions) {
			const gridDiv = $(`div#${gridDef.awardGrid}`);
			if (Object.hasOwn(gridDef, 'isGridShowing') && gridDef.isGridShowing) {
				gridDiv.show();
			} else {
				gridDiv.hide();
			}
		}
	}

	#setGoldBidSpanVisibility(viewId, medalId, gbFieldId, setVisible) {
		if (viewId && medalId && gbFieldId) {
			const gbSpan = $(`div#${viewId} tr#${medalId} > td.${gbFieldId} > span`);
			if (setVisible) {
				gbSpan.show();
			} else {
				gbSpan.hide();
			}
		}
	}

	#setTeamNameVisibilities() {
		for (const gridDef of this.#gridDefinitions) {
			if (!(gridDef.medals)) {
				continue;
			}
			const visibleRanksAlreadySeen = new Set();
			for (let j = 0; j < gridDef.medals.length; ++j) {
				const medal = gridDef.medals[j];
				const viewId = gridDef.awardGrid;
				const rankFieldId = gridDef.rankFieldId;
				const awardeeFieldId = this.#awardeeNameFieldId;
				const gbFieldId = this.#goldBidIndicatorFieldId;
				const rankSpan = $(`div#${viewId} tr#${medal.id} > td.${rankFieldId} > span`);
				const nameSpan = $(`div#${viewId} tr#${medal.id} > td.${awardeeFieldId} > span`);
				if (medal.rank < gridDef.bestRankShowing) {
					rankSpan.css('color', 'white');
					nameSpan.hide();
					this.#setGoldBidSpanVisibility(viewId, medal.id, gbFieldId, false);
				} else {
					const rankSpanColor = visibleRanksAlreadySeen.has(medal.rank) ? 'white' : '';
					rankSpan.css('color', rankSpanColor);
					nameSpan.show();
					this.#setGoldBidSpanVisibility(viewId, medal.id, gbFieldId, true);
					visibleRanksAlreadySeen.add(medal.rank);
				}
			}
		}
	}

	// Find the first grid whose best visible rank is the worst:
	#getFirstGridWithWorstRankShowing() {
		let worstRankShowing = 0;
		let gridWithWorstRankShowing = null;
		for (const gridDef of this.#gridDefinitions) {
			if (gridDef.bestRankShowing > worstRankShowing) {
				worstRankShowing = gridDef.bestRankShowing;
				gridWithWorstRankShowing = gridDef;
			}
		}
		return gridWithWorstRankShowing;
	}

	nextBtnClickHandler() {
		// Bail out if gridRenderHandler() has not run already:
		for (const gridDef of this.#gridDefinitions) {
			if (!Object.hasOwn(gridDef, 'isGridShowing')) {
				return;
			}
		}

		if (this.#nextShowsWholeGrid) {
			for (const gridDef of this.#gridDefinitions) {
				if (!gridDef.isGridShowing && gridDef.numRows > 0) {
					gridDef.isGridShowing = true;
					break;
				}
			}
			this.#setGridVisibilities();

			let areAllGridDefsVisible = true;
			for (const gridDef of this.#gridDefinitions) {
				if (!gridDef.isGridShowing && gridDef.numRows > 0) {
					areAllGridDefsVisible = false;
					break;
				}
			}
			if (areAllGridDefsVisible) {
				$(`div#${this.#nextBtnViewId} svg`).hide(); // Hide the Next button
			}
		} else {
			let gridWithWorstRankShowing = this.#getFirstGridWithWorstRankShowing();
			if (gridWithWorstRankShowing.bestRankShowing > 1) {
				--(gridWithWorstRankShowing.bestRankShowing);
			}

			this.#setTeamNameVisibilities();

			gridWithWorstRankShowing = this.#getFirstGridWithWorstRankShowing();
			if (gridWithWorstRankShowing.bestRankShowing <= 1) {
				$(`div#${this.#nextBtnViewId} svg`).hide(); // Hide the Next button
			}
		}
		return false;
	}

	nextBtnRenderHandler( /*event, view, record*/) {
		$(`div#${this.#nextBtnViewId} svg`).on('click', this.nextBtnClickHandler.bind(this));
	}

	#getGridDefForView(view) {
		for (const gridDef of this.#gridDefinitions) {
			if (gridDef.awardGrid === view.key) {
				return gridDef;
			}
		}
		return null;
	}

	#setGridAppearance(gridViewId) {
		// Hide the table page navigation and table header:
		$(`div#${gridViewId} thead`).hide();
		$(`div#${gridViewId} div.kn-records-nav`).hide();

		// Grid styling:
		$(`div#${gridViewId} h2`).css('font-size', '32px');
		$(`div#${gridViewId} h2`).css('font-weight', 'bold');
		for (let i = 0; i < 3; ++i) {
			$(`div#${gridViewId} span.col-${i}`).css('font-size', '24px');
		}
		$(`div#${gridViewId} td`).css('border-bottom-width', '0px');
	}

	#getMedalList(gridDef) {
		const models = Knack.models[gridDef.awardGrid].data.models;

		console.log(`Presentation grid row models (awardGrid ${gridDef.awardGrid}):`);
		console.log(models);

		gridDef.medals = models
			.map((model) => {
				const rawRank = model.attributes[gridDef.rankFieldId + '_raw'];
				const rank = Number(rawRank);
				return {
					id: model.attributes.id,
					rank: (rawRank && !isNaN(rank)) ? rank : 0,
					isGoldBidTeam: model.attributes[this.#goldBidIndicatorFieldId],
				};
			})
			.sort((lhs, rhs) => lhs.rank - rhs.rank);

		console.log(`Medal array for awardGrid ${gridDef.awardGrid}:`);
		console.log(gridDef.medals);
	}

	#getMaxRank(gridDef) {
		let maxRank = 0;
		for (const medal of gridDef.medals) {
			maxRank = Math.max(maxRank, medal.rank);
		}
		return maxRank;
	}

	gridRenderHandler(event, view, record) {
		const gridDef = this.#getGridDefForView(view);
		this.#setGridAppearance(gridDef.awardGrid);

		if (this.#nextShowsWholeGrid) {
			// Hide the grids:
			gridDef.bestRankShowing = -1;
			gridDef.isGridShowing = false;
			gridDef.numRows = Knack.models[gridDef.awardGrid].data.models.length;
			this.#setGridVisibilities();
		} else {
			// Get the medal data:
			this.#getMedalList(gridDef);

			// Replace ranks numbers with place names:
			const viewId = gridDef.awardGrid;
			const rankFieldId = gridDef.rankFieldId;
			const gbFieldId = this.#goldBidIndicatorFieldId;
			for (const medal of gridDef.medals) {
				const rankSpan = $(`div#${viewId} tr#${medal.id} > td.${rankFieldId} > span`);
				rankSpan.html(`${this.#medalLabels[medal.rank]}`);
				if (gbFieldId) {
					const gbSpan = $(`div#${viewId} tr#${medal.id} > td.${gbFieldId} > span`);
					gbSpan.html((medal.isGoldBidTeam === 1) ? '(Gold Bid Team)' : '');
				}
			}

			// Hide the team names:
			gridDef.bestRankShowing = this.#getMaxRank(gridDef) + 1;
			gridDef.isGridShowing = true;
			gridDef.numRows = Knack.models[gridDef.awardGrid].data.models.length;
			this.#setTeamNameVisibilities();
		}
	}
}

const eventPresenter = new Presenter(AppInfo.eventPresenterParams);
const oneTrackTrophyPresenter = new Presenter(AppInfo.oneTrackTrophyPresenterParams);
const twoTrackTrophyPresenter = new Presenter(AppInfo.twoTrackTrophyPresenterParams);
const divBStatesBoundSchoolsPresenter = new Presenter(AppInfo.divBStatesBoundSchoolsPresenterParams);
const divCStatesBoundSchoolsPresenter = new Presenter(AppInfo.divCStatesBoundSchoolsPresenterParams);
