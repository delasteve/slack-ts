// This file is auto-generated.

import { StaticGroupsCreateChildParameters } from './parameters';
import { GroupsCreateChildResponse } from './response';
import * as got from 'got';

/**
 * Clones and archives a private channel.
 */
export function groupsCreateChild(args: StaticGroupsCreateChildParameters): Promise<GroupsCreateChildResponse> {
  return got
    .post('https://slack.com/api/groups.createChild', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
