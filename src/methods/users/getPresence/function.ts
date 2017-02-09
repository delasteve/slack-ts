// This file is auto-generated.

import { StaticUsersGetPresenceParameters } from './parameters';
import { UsersGetPresenceResponse } from './response';
import * as got from 'got';

/**
 * Gets user presence information.
 */
export function usersGetPresence(args: StaticUsersGetPresenceParameters): Promise<UsersGetPresenceResponse> {
  return got
    .post('https://slack.com/api/users.getPresence', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
