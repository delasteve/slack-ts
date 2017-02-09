// This file is auto-generated.

import { StaticUsersProfileSetParameters } from './parameters';
import { UsersProfileSetResponse } from './response';
import * as got from 'got';

/**
 * Set the profile information for a user.
 */
export function usersProfileSet(args: StaticUsersProfileSetParameters): Promise<UsersProfileSetResponse> {
  return got
    .post('https://slack.com/api/users.profile.set', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
