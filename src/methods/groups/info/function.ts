// This file is auto-generated.

import { StaticGroupsInfoParameters } from './parameters';
import { GroupsInfoResponse } from './response';
import * as got from 'got';

/**
 * Gets information about a private channel.
 */
export function groupsInfo(args: StaticGroupsInfoParameters): Promise<GroupsInfoResponse> {
  return got
    .post('https://slack.com/api/groups.info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
