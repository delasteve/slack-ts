// This file is auto-generated.

import { StaticUsergroupsUsersListParameters } from './parameters';
import { UsergroupsUsersListResponse } from './response';
import * as got from 'got';

/**
 * List all users in a User Group
 */
export function usergroupsUsersList(args: StaticUsergroupsUsersListParameters): Promise<UsergroupsUsersListResponse> {
  return got
    .post('https://slack.com/api/usergroups.users.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
