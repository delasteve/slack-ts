// This file is auto-generated.

import { StaticRemindersDeleteParameters } from './parameters';
import { RemindersDeleteResponse } from './response';
import * as got from 'got';

/**
 * Deletes a reminder.
 */
export function remindersDelete(args: StaticRemindersDeleteParameters): Promise<RemindersDeleteResponse> {
  return got
    .post('https://slack.com/api/reminders.delete', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
