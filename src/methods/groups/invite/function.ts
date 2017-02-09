// This file is auto-generated.

import { StaticGroupsInviteParameters } from './parameters';
import { GroupsInviteResponse } from './response';
import * as got from 'got';

/**
 * Invites a user to a private channel.
 */
export function groupsInvite(args: StaticGroupsInviteParameters): Promise<GroupsInviteResponse> {
  return got
    .post('https://slack.com/api/groups.invite', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
