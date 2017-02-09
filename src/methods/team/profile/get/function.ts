// This file is auto-generated.

import { StaticTeamProfileGetParameters } from './parameters';
import { TeamProfileGetResponse } from './response';
import * as got from 'got';

/**
 * Retrieve a team's profile.
 */
export function teamProfileGet(args: StaticTeamProfileGetParameters): Promise<TeamProfileGetResponse> {
  return got
    .post('https://slack.com/api/team.profile.get', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
