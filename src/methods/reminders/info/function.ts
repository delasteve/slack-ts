// This file is auto-generated.

import { StaticRemindersInfoParameters } from './parameters';
import { RemindersInfoResponse } from './response';
import * as got from 'got';

/**
 * Gets information about a reminder.
 */
export function remindersInfo(args: StaticRemindersInfoParameters): Promise<RemindersInfoResponse> {
  return got
    .post('https://slack.com/api/reminders.info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
