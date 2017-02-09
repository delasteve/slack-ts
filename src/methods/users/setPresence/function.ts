// This file is auto-generated.

import { StaticUsersSetPresenceParameters } from './parameters';
import { UsersSetPresenceResponse } from './response';
import * as got from 'got';

/**
 * Manually sets user presence.
 */
export function usersSetPresence(args: StaticUsersSetPresenceParameters): Promise<UsersSetPresenceResponse> {
  return got
    .post('https://slack.com/api/users.setPresence', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
