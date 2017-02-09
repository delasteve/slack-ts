// This file is auto-generated.

import { StaticRemindersListParameters } from './parameters';
import { RemindersListResponse } from './response';
import * as got from 'got';

/**
 * Lists all reminders created by or for a given user.
 */
export function remindersList(args: StaticRemindersListParameters): Promise<RemindersListResponse> {
  return got
    .post('https://slack.com/api/reminders.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
