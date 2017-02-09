// This file is auto-generated.

import { StaticGroupsCloseParameters } from './parameters';
import { GroupsCloseResponse } from './response';
import * as got from 'got';

/**
 * Closes a private channel.
 */
export function groupsClose(args: StaticGroupsCloseParameters): Promise<GroupsCloseResponse> {
  return got
    .post('https://slack.com/api/groups.close', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
