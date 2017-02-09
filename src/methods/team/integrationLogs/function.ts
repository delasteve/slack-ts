// This file is auto-generated.

import { StaticTeamIntegrationLogsParameters } from './parameters';
import { TeamIntegrationLogsResponse } from './response';
import * as got from 'got';

/**
 * Gets the integration logs for the current team.
 */
export function teamIntegrationLogs(args: StaticTeamIntegrationLogsParameters): Promise<TeamIntegrationLogsResponse> {
  return got
    .post('https://slack.com/api/team.integrationLogs', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
