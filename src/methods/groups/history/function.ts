// This file is auto-generated.

import { StaticGroupsHistoryParameters } from './parameters';
import { GroupsHistoryResponse } from './response';
import * as got from 'got';

/**
 * Fetches history of messages and events from a private channel.
 */
export function groupsHistory(args: StaticGroupsHistoryParameters): Promise<GroupsHistoryResponse> {
  return got
    .post('https://slack.com/api/groups.history', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
