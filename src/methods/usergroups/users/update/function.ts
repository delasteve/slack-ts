// This file is auto-generated.

import { StaticUsergroupsUsersUpdateParameters } from './parameters';
import { UsergroupsUsersUpdateResponse } from './response';
import * as got from 'got';

/**
 * Update the list of users for a User Group
 */
export function usergroupsUsersUpdate(args: StaticUsergroupsUsersUpdateParameters): Promise<UsergroupsUsersUpdateResponse> {
  return got
    .post('https://slack.com/api/usergroups.users.update', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
