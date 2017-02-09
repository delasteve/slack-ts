// This file is auto-generated.

import { StaticTeamInfoParameters } from './parameters';
import { TeamInfoResponse } from './response';
import * as got from 'got';

/**
 * Gets information about the current team.
 */
export function teamInfo(args: StaticTeamInfoParameters): Promise<TeamInfoResponse> {
  return got
    .post('https://slack.com/api/team.info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
