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



	/* The first two are no longer used, and the second two are used only in presenters */
	/* Probably should be deleted after fixing the field IDs used in the presenters */
	/**/ static get schoolBAdjScoreFieldId() { return 'field_1763'; }	// 'School/Reg: Best B Tie-Adj Score' column
	/**/ static get schoolCAdjScoreFieldId() { return 'field_1764'; }	// 'School/Reg: Best C Tie-Adj Score' column
	/**/ static get schoolBRankFieldId() { return 'field_1938'; }		// 'School/Reg: B Rank' column
	/**/ static get schoolCRankFieldId() { return 'field_1939'; }		// 'School/Reg: C Rank' column



	/************************************************************************************/
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
	static get eventIconFieldId() { return 'field_1712'; }			 	// Events - General/Event Icon

	// Award Background
	static get presenterEventSelectionBSceneId() { return AppInfo.#ch('', 'scene_638', 'scene_638'); }
	static get presenterEventSelectionCSceneId() { return AppInfo.#ch('', 'scene_642', 'scene_642'); }
	static get presenterEventSelectionAllSceneId() { return AppInfo.#ch('scene_616', 'scene_605', 'scene_605'); }
	static get presenterStatesBoundBSceneId() { return AppInfo.#ch('', 'scene_641', ''); }
	static get presenterStatesBoundCSceneId() { return AppInfo.#ch('', 'scene_645', ''); }
	static get presenterStatesBoundAllBSceneId() { return AppInfo.#ch('', 'scene_646', ''); }
	static get presenterStatesBoundAllCSceneId() { return AppInfo.#ch('', 'scene_647', ''); }
	static get presenterEventAwardSceneId() { return AppInfo.#ch('scene_617', 'scene_606', 'scene_606'); }
	static get presenterEventIconViewId() { return AppInfo.#ch('view_1538', 'view_1521', 'view_1521'); }
	static get presenterSchoolBAwardSceneId() { return AppInfo.#ch('', 'scene_640', 'scene_640'); }
	static get presenterSchoolCAwardSceneId() { return AppInfo.#ch('', 'scene_643', 'scene_643'); }
	static get presenterSchoolBCAwardSceneId() { return AppInfo.#ch('', 'scene_613', 'scene_613'); }
	static get presenterTeamBAwardSceneId() { return AppInfo.#ch('', 'scene_692', 'scene_693'); }
	static get presenterTeamCAwardSceneId() { return AppInfo.#ch('', 'scene_693', 'scene_694'); }
	static get presenterTeamBCAwardSceneId() { return AppInfo.#ch('', 'scene_615', 'scene_615'); }
	static get rookieTeamOfTheYearBAwardSceneId() { return AppInfo.#ch('', 'scene_715', ''); }
	static get rookieTeamOfTheYearCAwardSceneId() { return AppInfo.#ch('', 'scene_714', ''); }
	static get rookieTeamOfTheYearBCAwardSceneId() { return AppInfo.#ch('', 'scene_716', ''); }
	static get awardBackgroundUrl() {
		return AppInfo.#ch(
			'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg',
			'https://static.wixstatic.com/shapes/78a71f_cec2dec5b7db45ae83baeda4b35b8da1.svg',
			'https://static.wixstatic.com/shapes/78a71f_ca485e8df91e4837a83c85af6bae7814.svg');
	}

	// Presenter
	static get teamNameFieldId() { return 'field_1202'; }				 	// 'Teams/Award Ceremony Team Name' column
	static get schoolNameFieldId() { return 'field_1862'; }			 	// 'School/Award Ceremony Name' column in BC portal
																							// 'School/School Name' column in ScoreScope
																							// Not used in Div. A portal

	static get eventPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('view_1542', 'view_1545', 'view_1545'),
			awardeeNameFieldId: this.teamNameFieldId,
			goldBidIndicatorFieldId: AppInfo.#ch('', 'field_2028', ''),
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('view_1539', 'view_1522', 'view_1522'),
					// BC uses AdjRank for gold bids. A uses plain rank, since there are
					// no gold bids there. In ScoreScope, the Knack-based logic removes
					// all the exhibition teams from the list, but we must use AdjRank
					// so we don't end up with skipped medals.
					rankFieldId: AppInfo.#ch(this.eventRankFieldId, this.eventAdjRankFieldId,
						this.eventAdjRankFieldId),
				}
			]
		};
	}

	// School Winners Presenters
	static get schoolBPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1675', 'view_1675'),
			awardeeNameFieldId: this.schoolNameFieldId,
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1673', 'view_1852'),
					rankFieldId: this.schoolBRankFieldId,
				}
			]
		};
	}
	static get schoolCPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1686', 'view_1686'),
			awardeeNameFieldId: this.schoolNameFieldId,
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1684', 'view_1853'),
					rankFieldId: this.schoolCRankFieldId,
				}
			]
		};
	}
	static get schoolBCPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1558', 'view_1558'),
			awardeeNameFieldId: this.schoolNameFieldId,
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1555', 'view_1854'),
					rankFieldId: this.schoolBRankFieldId,
				},
				{
					awardGrid: AppInfo.#ch('', 'view_1556', 'view_1855'),
					rankFieldId: this.schoolCRankFieldId,
				}
			]
		};
	}

	// Team Winners Presenters
	static get teamBPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1861', 'view_1861'),
			awardeeNameFieldId: this.teamNameFieldId,
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1863', 'view_1862'),
					rankFieldId: this.teamRankFieldId,
				}
			]
		};
	}
	static get teamCPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1867', 'view_1867'),
			awardeeNameFieldId: this.teamNameFieldId,
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1866', 'view_1866'),
					rankFieldId: this.teamRankFieldId,
				}
			]
		};
	}
	static get teamBCPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1873', 'view_1870'),
			awardeeNameFieldId: this.teamNameFieldId,
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: false,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1560', 'view_1560'),
					rankFieldId: this.teamRankFieldId,
				},
				{
					awardGrid: AppInfo.#ch('', 'view_1561', 'view_1561'),
					rankFieldId: this.teamRankFieldId,
				}
			]
		};
	}

	// States-Bound Presenters
	static get statesBoundBPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1895', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1678', ''),
					rankFieldId: '',
				},
				{
					awardGrid: AppInfo.#ch('', 'view_1695', ''),
					rankFieldId: '',
				}
			]
		};
	}
	static get statesBoundCPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1894', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1694', ''),
					rankFieldId: '',
				},
				{
					awardGrid: AppInfo.#ch('', 'view_1696', ''),
					rankFieldId: '',
				}
			]
		};
	}
	static get statesBoundAllBPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1893', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1698', ''),
					rankFieldId: '',
				},
				{
					awardGrid: AppInfo.#ch('', 'view_1702', ''),
					rankFieldId: '',
				}
			]
		};
	}
	static get statesBoundAllCPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1892', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_1700', ''),
					rankFieldId: '',
				},
				{
					awardGrid: AppInfo.#ch('', 'view_1701', ''),
					rankFieldId: '',
				}
			]
		};
	}

	// Rookie Team of the Year Presenters
	static get rookieTeamOfTheYearBPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1964', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_2144', ''),
					rankFieldId: '',
				}
			]
		};
	}
	static get rookieTeamOfTheYearCPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1965', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_2145', ''),
					rankFieldId: '',
				}
			]
		};
	}
	static get rookieTeamOfTheYearBCPresenterParams() {
		return {
			nextBtnViewId: AppInfo.#ch('', 'view_1966', ''),
			awardeeNameFieldId: '',
			goldBidIndicatorFieldId: '',
			nextShowsWholeGrid: true,
			gridDefinitions: [
				{
					awardGrid: AppInfo.#ch('', 'view_2146', ''),
					rankFieldId: '',
				},
				{
					awardGrid: AppInfo.#ch('', 'view_2147', ''),
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
function RankUpdater(gridId, sceneId, lockSubmitForm, finalizeBtnViewId,
		scoreFieldId, rankFieldId, adjRankFieldId, trophyRankFieldId,
		uninvitedRankFieldId, statusFieldId, isEventRanker) {
	this.gridId = gridId;
	this.sceneId = sceneId;
	this.lockSubmitForm = lockSubmitForm;
	this.finalizeBtnViewId = finalizeBtnViewId;
	this.scoreFieldId = scoreFieldId;
	this.rankFieldId = rankFieldId;
	this.rawRankFieldId = this.rankFieldId + '_raw';
	this.adjRankFieldId = adjRankFieldId;
	this.rawAdjRankFieldId = this.adjRankFieldId + '_raw';
	this.trophyRankFieldId = trophyRankFieldId;
	this.rawTrophyRankFieldId = this.trophyRankFieldId + '_raw';
	this.uninvitedRankFieldId = uninvitedRankFieldId;
	this.rawUninvitedRankFieldId = this.uninvitedRankFieldId + '_raw';
	this.statusFieldId = statusFieldId;
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

	// In the BC portal, this really means "is gold bid team,"
	// but in ScoreScope it means a true exhibition team, e.g.,
	// a Fairfax team at the Fairfax invitational.
	this.isExhibitionTeam = function(model) {
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
	}.bind(this);

	this.isTrialEvent = function(model) {
		if (!AppInfo.eventIsTrialFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, AppInfo.eventIsTrialFieldId)) {
			// For the ES scoring grid, which doesn't have this column
			return false;
		} else {
			const rawFieldId = AppInfo.eventIsTrialFieldId + '_raw';
			return model.attributes[rawFieldId] === true;
		}
	}.bind(this);

	// True if this team has the best team score among the teams from the same school.
	// This team serves as the representative of the school when we list school rankings.
	this.isBestPlacedTrueTeam = function(model) {
		if (!AppInfo.isBestPlacedTrueTeamFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, AppInfo.isBestPlacedTrueTeamFieldId)) {
			return false;
		} else {
			const rawFieldId = AppInfo.isBestPlacedTrueTeamFieldId + '_raw';
			return model.attributes[rawFieldId] === 0;
		}
	}.bind(this);

	// True if this school was given an invite to states and accepted
	// that invite by attending the national-ready regional.
	this.acceptedInvite = function(model) {
		if (!AppInfo.acceptedInviteFieldId) {
			return false;
		} else if (!Object.hasOwn(model.attributes, AppInfo.acceptedInviteFieldId)) {
			return false;
		} else {
			const rawFieldId = AppInfo.acceptedInviteFieldId + '_raw';
			return model.attributes[rawFieldId] !== 0;
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
			: -1;	// for grids w/o a rank column
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

	this.hasTrophyRank = function(model) {
		if (!this.trophyRankFieldId) {
			return false;
		} else {
			return Object.hasOwn(model.attributes, this.rawTrophyRankFieldId);
		}
	}.bind(this);

	this.getTrophyRank = function(model) {
		return this.hasTrophyRank(model)
			? model.attributes[this.rawTrophyRankFieldId]
			: -1;	// for grids w/o a trophy. rank column
	}.bind(this);

	this.hasUninvitedRank = function(model) {
		if (!this.uninvitedRankFieldId) {
			return false;
		} else {
			return Object.hasOwn(model.attributes, this.rawUninvitedRankFieldId);
		}
	}.bind(this);

	this.getUninvitedRank = function(model) {
		return this.hasUninvitedRank(model)
			? model.attributes[this.rawUninvitedRankFieldId]
			: -1;	// for grids w/o an uninvited. rank column
	}.bind(this);

	this.createScoreInfo = function(model) {
		return {
			id: model.attributes.id,
			adjScore: model.attributes[this.scoreFieldId + '_raw'],
			status: this.getStatus(model),
			isExhibition: this.isExhibitionTeam(model),
			isTrialEvent: this.isTrialEvent(model),
			isBestPlacedTrueTeam: this.isBestPlacedTrueTeam(model),
			acceptedInvite: this.acceptedInvite(model),
			hasRank: this.hasRank(model),
			oldRank: this.getRank(model),
			newRank: -1,
			hasAdjRank: this.hasAdjRank(model),
			oldAdjRank: this.getAdjRank(model),
			newAdjRank: -1,
			hasTrophyRank: this.hasTrophyRank(model),
			oldTrophyRank: this.getTrophyRank(model),
			newTrophyRank: -1,
			hasUninvitedRank: this.hasUninvitedRank(model),
			oldUninvitedRank: this.getUninvitedRank(model),
			newUninvitedRank: -1,
		};
	}.bind(this);

	// A cluster in this context is one non-exhibition team together with
	// any exhibition teams that score better than, and adjacent to, that
	// non-exhibition team.
	this.computeRankClusters = function(scoreInfos, adjustForExhibition) {
		const flaggedScores = scoreInfos
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

	// Takes two ScoreInfo instances and returns neg, 0,
	// or pos according to their team rank sort order.
	this.teamRankComparitor = function(lhs, rhs) {
		if (lhs.isExhibition && !rhs.isExhibition) {
			return 1;
		} else if (!lhs.isExhibition && rhs.isExhibition) {
			return -1;
		} else {
			return lhs.adjScore - rhs.adjScore;
		}
	}.bind(this);

	// Calling
	//    indexOf(scoreInfos, toFind, predicate)
	// is similar to
	//    scoreInfos.indexOf(toFind)
	// except that rather than using comparison by strict equality, this
	// indexOf variant is looking for the element x where
	//    predicate(x, toFind)
	// returns true.
	this.indexOf = function(scoreInfos, toFind, predicate) {
		for (let i = 0; i < scoreInfos.length; ++i) {
			if (predicate(toFind, scoreInfos[i])) {
				return i;
			}
		}
		return -1;
	}.bind(this);

	this.rankTeamsExhibitionAdjusted = function(scoreInfos) {
		// Compute the true ranks, with exhibition teams at the end:
		const rankOrderedScoreInfos = scoreInfos.toSorted(this.teamRankComparitor);
		for (const si of scoreInfos) {
			si.newRank = 1 + this.indexOf(rankOrderedScoreInfos, si,
				(lhs, rhs) => this.teamRankComparitor(lhs, rhs) == 0);
		}

		// Compute trophy ranks on school-representative teams:
		const rankOrderedTrophyScoreInfos = rankOrderedScoreInfos
			.filter((si) => si.isBestPlacedTrueTeam);
		for (const si of scoreInfos) {
			const index = this.indexOf(rankOrderedTrophyScoreInfos, si,
				(lhs, rhs) => this.teamRankComparitor(lhs, rhs) == 0);
			si.newTrophyRank = (!si.isBestPlacedTrueTeam || index < 0)
				? '' : (index + 1);
		}

		// Compute uninvited school ranks:
		const rankOrderedUninvitedScoreInfos = rankOrderedTrophyScoreInfos
			.filter((si) => !si.acceptedInvite);
		for (const si of scoreInfos) {
			const index = this.indexOf(rankOrderedUninvitedScoreInfos, si,
				(lhs, rhs) => this.teamRankComparitor(lhs, rhs) == 0);
			si.newUninvitedRank = (!si.isBestPlacedTrueTeam || si.acceptedInvite || index < 0)
				? '' : (index + 1);
		}
	}.bind(this);

	this.computeScoreInfoList = function() {
		const models = Knack.models[this.gridId].data.models;
		console.log('Grid row models:');
		console.log(models);

		const scoreInfos = models.map((model) => this.createScoreInfo(model));

		if (this.isEventRanker) {
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
		} else {
			this.rankTeamsExhibitionAdjusted(scoreInfos);
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

	this.getRankCellBackgroundColor = function(scoreInfo, rankHistogram) {
		if (scoreInfo.status) {
			return '';	// default color for special statuses
		} else if (rankHistogram.has(scoreInfo.newRank)
				&& rankHistogram.get(scoreInfo.newRank) > 1) {
			return '#fbe9c2';	// yellow for ties
		} else {
			return '';	// default color otherwise
		}
	}.bind(this);

	this.getAdjRankCellBackgroundColor = function(scoreInfo) {
		if (scoreInfo.status) {
			return '';	// default color for special statuses
		} else if (scoreInfo.isExhibition && !scoreInfo.isTrialEvent) {
			return '#9db0c5';	// greyish blue for exhibition teams in non-trial events
		} else {
			return '';	// default color otherwise
		}
	}.bind(this);

	this.getDisplayRank = function(scoreInfo, rankProperty) {
		return scoreInfo.status
			? ''	// Rank of a special status is not meaningful to users
			: scoreInfo[rankProperty];
	}.bind(this);

	// "Other" ranks are adjusted ranks, trophy ranks, and uninvited ranks
	this.updateDisplayedOtherRanks = function(scoreInfo, rankFieldId, rankPropName) {
		if (rankFieldId) {
			const bg = this.getAdjRankCellBackgroundColor(scoreInfo);
			const adjRank = this.getDisplayRank(scoreInfo, rankPropName);
			$(`div#${gridId} tr#${scoreInfo.id} > td.${rankFieldId}`).css('background', bg);
			$(`div#${gridId} tr#${scoreInfo.id} > td.${rankFieldId} > span`).text(`${adjRank}`);
		}
	}.bind(this);

	this.updateDisplayedRanks = function(scoreInfos) {
		for (const scoreInfo of scoreInfos) {
			if (this.rankFieldId) {
				const rankHistogram = this.computeRankHistogram(scoreInfos);
				const bg = this.getRankCellBackgroundColor(scoreInfo, rankHistogram);
				const rank = this.getDisplayRank(scoreInfo, 'newRank');
				$(`div#${gridId} tr#${scoreInfo.id} > td.${this.rankFieldId}`).css('background', bg);
				$(`div#${gridId} tr#${scoreInfo.id} > td.${this.rankFieldId} > span`).text(`${rank}`);
			}
			this.updateDisplayedOtherRanks(scoreInfo, this.adjRankFieldId, 'newAdjRank');
			this.updateDisplayedOtherRanks(scoreInfo, this.trophyRankFieldId, 'newTrophyRank');
			this.updateDisplayedOtherRanks(scoreInfo, this.uninvitedRankFieldId, 'newUninvitedRank');
		}
	}.bind(this);

	this.putRanksToDatabase = async function(scoreInfos) {
		for (const scoreInfo of scoreInfos) {
			if (scoreInfo.newRank === scoreInfo.oldRank
					&& scoreInfo.newAdjRank === scoreInfo.oldAdjRank
					&& scoreInfo.newTrophyRank === scoreInfo.oldTrophyRank
					&& scoreInfo.newUninvitedRank === scoreInfo.oldUninvitedRank) {
				continue;
			}
			const optionsBody = {};
			if (this.rankFieldId) {
				optionsBody[this.rankFieldId] = scoreInfo.newRank;
			}
			if (this.adjRankFieldId) {
				optionsBody[this.adjRankFieldId] = scoreInfo.newAdjRank;
			}
			if (this.trophyRankFieldId) {
				optionsBody[this.trophyRankFieldId] = scoreInfo.newTrophyRank;
			}
			if (this.uninvitedRankFieldId) {
				optionsBody[this.uninvitedRankFieldId] = scoreInfo.newUninvitedRank;
			}
			await ViewBasedApiPut.putWithRetry(this.sceneId, this.gridId, scoreInfo.id, optionsBody);
		}
	}.bind(this);

	this.finalizeBtnClickHandler = async function() {
		if (this.rankStorageInProgress) {
			return;
		}
		$(`#${this.lockSubmitForm} div#kn-input-`).show();	// Result report - Please Wait
		ViewBasedApiPut.setSpinner();
		this.rankStorageInProgress = true;
		try {
			const startTime = Date.now();
			await this.putRanksToDatabase(this.scoreInfos);
			const elapsedTime = (Date.now() - startTime) / 1000.0;
			console.log(`Database updates for ranking succeeded in ${elapsedTime} sec`);

			$(`#${this.lockSubmitForm} div#kn-input- h3.kn-title`).text('Success!');
			const label = this.isEventRanker ? 'event' : 'tournament';
			$(`#${this.lockSubmitForm} div#kn-input- p.kn-description`).html(`
				The scores and ranks have been finalized. Press the button to<br/>
				lock the ${label} and submit it for presentation.`);
			$(`div#${this.finalizeBtnViewId}`).hide();			// Finalize button
			$(`#${this.lockSubmitForm} div.kn-submit`).show();	// Submit button
		} catch (error) {
			console.log(`Database updates for ranking failed: ${error.message}`);
			$(`#${this.lockSubmitForm} div#kn-input- h3.kn-title`).text('An error occurred');
			$(`#${this.lockSubmitForm} div#kn-input- p.kn-description`).html(`
				Please wait a moment or two and press the Finalize button again.
				<br/><br/>Error message: ${error.message}`);
		} finally {
			ViewBasedApiPut.cancelSpinner();
			this.rankStorageInProgress = false;
		}
	}.bind(this);

	this.rankUpdateHandler = function(/* event, view, record*/) {
		this.scoreInfos = this.computeScoreInfoList();
		this.updateDisplayedRanks(this.scoreInfos);
	}.bind(this);

	this.sceneRenderHandler = function(/* event, view, record*/) {
		if (this.isEventRanker) {
			// For the event ranker on the lock scores page, the scores table is needed
			// only to force data retrieval, so we hide it. But on the team lock scores
			// page, this table is the only way to see all the ranks computed, so we
			// label it "for programmers only" and leave it showing.
			$(`#${this.gridId}`).hide();
		}
		$(`#${this.lockSubmitForm} div#kn-input-`).hide();	// Result report
		$(`#${this.lockSubmitForm} div.kn-submit`).hide();	// Submit button
		$(`div#${this.finalizeBtnViewId} svg`).on('click', this.finalizeBtnClickHandler);
	}.bind(this);

	if (this.gridId) {
		if (this.sceneId && this.lockSubmitForm && this.finalizeBtnViewId) {
			$(document).on(`knack-scene-render.${this.sceneId}`, this.sceneRenderHandler);
		}
		$(document).on(`knack-view-render.${this.gridId}`, this.rankUpdateHandler);
		$(document).on(`knack-cell-update.${this.gridId}`, this.rankUpdateHandler);
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
	#backgroundUrl;

	constructor(awardSceneId, iconViewId, iconFieldId, backgroundUrl) {
		this.#awardSceneId = awardSceneId;
		this.#iconViewId = iconViewId;
		this.#iconFieldId = iconFieldId;
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

const eventAwardBackground = new AwardBackground(
	AppInfo.presenterEventAwardSceneId, AppInfo.presenterEventIconViewId,
	AppInfo.eventIconFieldId, AppInfo.awardBackgroundUrl);
const schoolBAwardBackground = new AwardBackground(
	AppInfo.presenterSchoolBAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const schoolCAwardBackground = new AwardBackground(
	AppInfo.presenterSchoolCAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const schoolBCAwardBackground = new AwardBackground(
	AppInfo.presenterSchoolBCAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const teamBAwardBackground = new AwardBackground(
	AppInfo.presenterTeamBAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const teamCAwardBackground = new AwardBackground(
	AppInfo.presenterTeamCAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const teamBCAwardBackground = new AwardBackground(
	AppInfo.presenterTeamBCAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const eventSelectionBAwardBackground = new AwardBackground(
	AppInfo.presenterEventSelectionBSceneId, '', '', AppInfo.awardBackgroundUrl);
const eventSelectionCAwardBackground = new AwardBackground(
	AppInfo.presenterEventSelectionCSceneId, '', '', AppInfo.awardBackgroundUrl);
const eventSelectionAllAwardBackground = new AwardBackground(
	AppInfo.presenterEventSelectionAllSceneId, '', '', AppInfo.awardBackgroundUrl);
const statesBoundBAwardBackground = new AwardBackground(
	AppInfo.presenterStatesBoundBSceneId, '', '', AppInfo.awardBackgroundUrl);
const statesBoundCAwardBackground = new AwardBackground(
	AppInfo.presenterStatesBoundCSceneId, '', '', AppInfo.awardBackgroundUrl);
const statesBoundAllBAwardBackground = new AwardBackground(
	AppInfo.presenterStatesBoundAllBSceneId, '', '', AppInfo.awardBackgroundUrl);
const statesBoundAllCAwardBackground = new AwardBackground(
	AppInfo.presenterStatesBoundAllCSceneId, '', '', AppInfo.awardBackgroundUrl);
const rookieTeamOfTheYearBAwardBackground = new AwardBackground(
	AppInfo.rookieTeamOfTheYearBAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const rookieTeamOfTheYearCAwardBackground = new AwardBackground(
	AppInfo.rookieTeamOfTheYearCAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const rookieTeamOfTheYearBCAwardBackground = new AwardBackground(
	AppInfo.rookieTeamOfTheYearBCAwardSceneId, '', '', AppInfo.awardBackgroundUrl);
const tournamentSelectionAwardBackground = new AwardBackground(
	AppInfo.presenterTournamentSelectionSceneId, '', '', '');
const scoremasterAwardBackground = new AwardBackground(
	AppInfo.scoremasterSceneId, '', '', '');
const adminAwardBackground = new AwardBackground(
	AppInfo.adminSceneId, '', '', '');



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

function Presenter(presenterParams) {
	this.nextBtnViewId = presenterParams.nextBtnViewId;
	this.awardeeNameFieldId = presenterParams.awardeeNameFieldId;
	this.goldBidIndicatorFieldId = presenterParams.goldBidIndicatorFieldId;
	this.nextShowsWholeGrid = presenterParams.nextShowsWholeGrid;
	this.gridDefinitions = presenterParams.gridDefinitions;

	this.medalLabels = [
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

	this.setGridVisibilities = function() {
		for (const gridDef of this.gridDefinitions) {
			const gridDiv = $(`div#${gridDef.awardGrid}`);
			if (Object.hasOwn(gridDef, 'isGridShowing') && gridDef.isGridShowing) {
				gridDiv.show();
			} else {
				gridDiv.hide();
			}
		}
	}.bind(this);

	this.setGoldBidSpanVisibility = function(viewId, medalId, gbFieldId, setVisible) {
		if (viewId && medalId && gbFieldId) {
			const gbSpan = $(`div#${viewId} tr#${medalId} > td.${gbFieldId} > span`);
			if (setVisible) {
				gbSpan.show();
			} else {
				gbSpan.hide();
			}
		}
	}.bind(this);

	this.setTeamNameVisibilities = function() {
		for (const gridDef of this.gridDefinitions) {
			if (!(gridDef.medals)) {
				continue;
			}
			const visibleRanksAlreadySeen = new Set();
			for (let j = 0; j < gridDef.medals.length; ++j) {
				const medal = gridDef.medals[j];
				const viewId = gridDef.awardGrid;
				const rankFieldId = gridDef.rankFieldId;
				const awardeeFieldId = this.awardeeNameFieldId;
				const gbFieldId = this.goldBidIndicatorFieldId;
				const rankSpan = $(`div#${viewId} tr#${medal.id} > td.${rankFieldId} > span`);
				const nameSpan = $(`div#${viewId} tr#${medal.id} > td.${awardeeFieldId} > span`);
				if (medal.rank < gridDef.bestRankShowing) {
					rankSpan.css('color', 'white');
					nameSpan.hide();
					this.setGoldBidSpanVisibility(viewId, medal.id, gbFieldId, false);
				} else {
					const rankSpanColor = visibleRanksAlreadySeen.has(medal.rank) ? 'white' : '';
					rankSpan.css('color', rankSpanColor);
					nameSpan.show();
					this.setGoldBidSpanVisibility(viewId, medal.id, gbFieldId, true);
					visibleRanksAlreadySeen.add(medal.rank);
				}
			}
		}
	}.bind(this);

	// Find the first grid whose best visible rank is the worst:
	this.getFirstGridWithWorstRankShowing = function() {
		let worstRankShowing = 0;
		let gridWithWorstRankShowing = null;
		for (const gridDef of this.gridDefinitions) {
			if (gridDef.bestRankShowing > worstRankShowing) {
				worstRankShowing = gridDef.bestRankShowing;
				gridWithWorstRankShowing = gridDef;
			}
		}
		return gridWithWorstRankShowing;
	}.bind(this);

	this.nextBtnClickHandler = function() {
		// Bail out if gridRenderHandler() has not run already:
		for (const gridDef of this.gridDefinitions) {
			if (!Object.hasOwn(gridDef, 'isGridShowing')) {
				return;
			}
		}

		if (this.nextShowsWholeGrid) {
			for (const gridDef of this.gridDefinitions) {
				if (!gridDef.isGridShowing && gridDef.numRows > 0) {
					gridDef.isGridShowing = true;
					break;
				}
			}
			this.setGridVisibilities();

			let areAllGridDefsVisible = true;
			for (const gridDef of this.gridDefinitions) {
				if (!gridDef.isGridShowing && gridDef.numRows > 0) {
					areAllGridDefsVisible = false;
					break;
				}
			}
			if (areAllGridDefsVisible) {
				$(`div#${this.nextBtnViewId} svg`).hide();	// Hide the Next button
			}
		} else {
			let gridWithWorstRankShowing = this.getFirstGridWithWorstRankShowing();
			if (gridWithWorstRankShowing.bestRankShowing > 1) {
				--(gridWithWorstRankShowing.bestRankShowing);
			}

			this.setTeamNameVisibilities();

			gridWithWorstRankShowing = this.getFirstGridWithWorstRankShowing();
			if (gridWithWorstRankShowing.bestRankShowing <= 1) {
				$(`div#${this.nextBtnViewId} svg`).hide();	// Hide the Next button
			}
		}
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

	this.setGridAppearance = function(gridViewId) {
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
	}.bind(this);

	this.getMedalList = function(gridDef) {
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
					isGoldBidTeam: model.attributes[this.goldBidIndicatorFieldId],
				};
			})
			.sort((lhs, rhs) => lhs.rank - rhs.rank);

		console.log(`Medal array for awardGrid ${gridDef.awardGrid}:`);
		console.log(gridDef.medals);
	}.bind(this);

	this.getMaxRank = function(gridDef) {
		let maxRank = 0;
		for (const medal of gridDef.medals) {
			maxRank = Math.max(maxRank, medal.rank);
		}
		return maxRank;
	}.bind(this);

	this.gridRenderHandler = function(event, view, record) {
		const gridDef = this.getGridDefForView(view);
		this.setGridAppearance(gridDef.awardGrid);

		if (this.nextShowsWholeGrid) {
			// Hide the grids:
			gridDef.bestRankShowing = -1;
			gridDef.isGridShowing = false;
			gridDef.numRows = Knack.models[gridDef.awardGrid].data.models.length;
			this.setGridVisibilities();
		} else {
			// Get the medal data:
			this.getMedalList(gridDef);

			// Replace ranks numbers with place names:
			const viewId = gridDef.awardGrid;
			const rankFieldId = gridDef.rankFieldId;
			const gbFieldId = this.goldBidIndicatorFieldId;
			for (const medal of gridDef.medals) {
				const rankSpan = $(`div#${viewId} tr#${medal.id} > td.${rankFieldId} > span`);
				rankSpan.html(`${this.medalLabels[medal.rank]}`);
				if (gbFieldId) {
					const gbSpan = $(`div#${viewId} tr#${medal.id} > td.${gbFieldId} > span`);
					gbSpan.html((medal.isGoldBidTeam === 1) ? '(Gold Bid Team)' : '');
				}
			}

			// Hide the team names:
			gridDef.bestRankShowing = this.getMaxRank(gridDef) + 1;
			gridDef.isGridShowing = true;
			gridDef.numRows = Knack.models[gridDef.awardGrid].data.models.length;
			this.setTeamNameVisibilities();
		}
	}.bind(this);

	for (const gridDef of this.gridDefinitions) {
		if (gridDef.awardGrid) {
			$(document).on(`knack-view-render.${gridDef.awardGrid}`, this.gridRenderHandler);
		}
	}
	if (this.nextBtnViewId) {
		$(document).on(`knack-view-render.${this.nextBtnViewId}`, this.nextBtnRenderHandler);
	}
}

const eventPresenter = new Presenter(AppInfo.eventPresenterParams);
const schoolBPresenter = new Presenter(AppInfo.schoolBPresenterParams);
const schoolCPresenter = new Presenter(AppInfo.schoolCPresenterParams);
const schoolBCPresenter = new Presenter(AppInfo.schoolBCPresenterParams);
const teamBPresenter = new Presenter(AppInfo.teamBPresenterParams);
const teamCPresenter = new Presenter(AppInfo.teamCPresenterParams);
const teamBCPresenter = new Presenter(AppInfo.teamBCPresenterParams);
const statesBoundBPresenter = new Presenter(AppInfo.statesBoundBPresenterParams);
const statesBoundCPresenter = new Presenter(AppInfo.statesBoundCPresenterParams);
const statesBoundAllBPresenter = new Presenter(AppInfo.statesBoundAllBPresenterParams);
const statesBoundAllCPresenter = new Presenter(AppInfo.statesBoundAllCPresenterParams);
const rookieTeamOfTheYearBPresenter = new Presenter(AppInfo.rookieTeamOfTheYearBPresenterParams);
const rookieTeamOfTheYearCPresenter = new Presenter(AppInfo.rookieTeamOfTheYearCPresenterParams);
const rookieTeamOfTheYearBCPresenter = new Presenter(AppInfo.rookieTeamOfTheYearBCPresenterParams);
