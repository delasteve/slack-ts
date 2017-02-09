// This file is auto-generated.

import { StaticGroupsListParameters } from './parameters';
import { GroupsListResponse } from './response';
import * as got from 'got';

/**
 * Lists private channels that the calling user has access to.
 */
export function groupsList(args: StaticGroupsListParameters): Promise<GroupsListResponse> {
  return got
    .post('https://slack.com/api/groups.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
