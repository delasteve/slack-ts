// This file is auto-generated.

import { StaticGroupsCreateParameters } from './parameters';
import { GroupsCreateResponse } from './response';
import * as got from 'got';

/**
 * Creates a private channel.
 */
export function groupsCreate(args: StaticGroupsCreateParameters): Promise<GroupsCreateResponse> {
  return got
    .post('https://slack.com/api/groups.create', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
