// This file is auto-generated.

import { StaticGroupsKickParameters } from './parameters';
import { GroupsKickResponse } from './response';
import * as got from 'got';

/**
 * Removes a user from a private channel.
 */
export function groupsKick(args: StaticGroupsKickParameters): Promise<GroupsKickResponse> {
  return got
    .post('https://slack.com/api/groups.kick', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
