// This file is auto-generated.

import { StaticUsersProfileGetParameters } from './parameters';
import { UsersProfileGetResponse } from './response';
import * as got from 'got';

/**
 * Retrieves a user's profile information.
 */
export function usersProfileGet(args: StaticUsersProfileGetParameters): Promise<UsersProfileGetResponse> {
  return got
    .post('https://slack.com/api/users.profile.get', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
