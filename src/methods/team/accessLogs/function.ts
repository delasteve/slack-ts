// This file is auto-generated.

import { StaticTeamAccessLogsParameters } from './parameters';
import { TeamAccessLogsResponse } from './response';
import * as got from 'got';

/**
 * Gets the access logs for the current team.
 */
export function teamAccessLogs(args: StaticTeamAccessLogsParameters): Promise<TeamAccessLogsResponse> {
  return got
    .post('https://slack.com/api/team.accessLogs', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
