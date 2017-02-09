// This file is auto-generated.

import { StaticUsersInfoParameters } from './parameters';
import { UsersInfoResponse } from './response';
import * as got from 'got';

/**
 * Gets information about a user.
 */
export function usersInfo(args: StaticUsersInfoParameters): Promise<UsersInfoResponse> {
  return got
    .post('https://slack.com/api/users.info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
