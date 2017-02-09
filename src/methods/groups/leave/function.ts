// This file is auto-generated.

import { StaticGroupsLeaveParameters } from './parameters';
import { GroupsLeaveResponse } from './response';
import * as got from 'got';

/**
 * Leaves a private channel.
 */
export function groupsLeave(args: StaticGroupsLeaveParameters): Promise<GroupsLeaveResponse> {
  return got
    .post('https://slack.com/api/groups.leave', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
