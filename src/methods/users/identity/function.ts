// This file is auto-generated.

import { StaticUsersIdentityParameters } from './parameters';
import { UsersIdentityResponse } from './response';
import * as got from 'got';

/**
 * Get a user's identity.
 */
export function usersIdentity(args: StaticUsersIdentityParameters): Promise<UsersIdentityResponse> {
  return got
    .post('https://slack.com/api/users.identity', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
