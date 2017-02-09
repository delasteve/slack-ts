// This file is auto-generated.

import { StaticTeamBillableInfoParameters } from './parameters';
import { TeamBillableInfoResponse } from './response';
import * as got from 'got';

/**
 * Gets billable users information for the current team.
 */
export function teamBillableInfo(args: StaticTeamBillableInfoParameters): Promise<TeamBillableInfoResponse> {
  return got
    .post('https://slack.com/api/team.billableInfo', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
