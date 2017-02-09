// This file is auto-generated.

import { StaticUsersDeletePhotoParameters } from './parameters';
import { UsersDeletePhotoResponse } from './response';
import * as got from 'got';

/**
 * Delete the user profile photo
 */
export function usersDeletePhoto(args: StaticUsersDeletePhotoParameters): Promise<UsersDeletePhotoResponse> {
  return got
    .post('https://slack.com/api/users.deletePhoto', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
