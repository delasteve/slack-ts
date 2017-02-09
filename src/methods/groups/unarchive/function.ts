// This file is auto-generated.

import { StaticGroupsUnarchiveParameters } from './parameters';
import { GroupsUnarchiveResponse } from './response';
import * as got from 'got';

/**
 * Unarchives a private channel.
 */
export function groupsUnarchive(args: StaticGroupsUnarchiveParameters): Promise<GroupsUnarchiveResponse> {
  return got
    .post('https://slack.com/api/groups.unarchive', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
