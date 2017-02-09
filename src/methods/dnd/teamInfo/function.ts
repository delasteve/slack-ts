// This file is auto-generated.

import { StaticDndTeamInfoParameters } from './parameters';
import { DndTeamInfoResponse } from './response';
import * as got from 'got';

/**
 * Retrieves the Do Not Disturb status for users on a team.
 */
export function dndTeamInfo(args: StaticDndTeamInfoParameters): Promise<DndTeamInfoResponse> {
  return got
    .post('https://slack.com/api/dnd.teamInfo', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
