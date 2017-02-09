// This file is auto-generated.

import { StaticGroupsOpenParameters } from './parameters';
import { GroupsOpenResponse } from './response';
import * as got from 'got';

/**
 * Opens a private channel.
 */
export function groupsOpen(args: StaticGroupsOpenParameters): Promise<GroupsOpenResponse> {
  return got
    .post('https://slack.com/api/groups.open', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
