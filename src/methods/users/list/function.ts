// This file is auto-generated.

import { StaticUsersListParameters } from './parameters';
import { UsersListResponse } from './response';
import * as got from 'got';

/**
 * Lists all users in a Slack team.
 */
export function usersList(args: StaticUsersListParameters): Promise<UsersListResponse> {
  return got
    .post('https://slack.com/api/users.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
