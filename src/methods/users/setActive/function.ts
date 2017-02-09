// This file is auto-generated.

import { StaticUsersSetActiveParameters } from './parameters';
import { UsersSetActiveResponse } from './response';
import * as got from 'got';

/**
 * Marks a user as active.
 */
export function usersSetActive(args: StaticUsersSetActiveParameters): Promise<UsersSetActiveResponse> {
  return got
    .post('https://slack.com/api/users.setActive', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
