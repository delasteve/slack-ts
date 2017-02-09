// This file is auto-generated.

import { StaticUsersSetPhotoParameters } from './parameters';
import { UsersSetPhotoResponse } from './response';
import * as got from 'got';

/**
 * Set the user profile photo
 */
export function usersSetPhoto(args: StaticUsersSetPhotoParameters): Promise<UsersSetPhotoResponse> {
  return got
    .post('https://slack.com/api/users.setPhoto', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
