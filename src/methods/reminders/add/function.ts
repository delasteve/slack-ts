// This file is auto-generated.

import { StaticRemindersAddParameters } from './parameters';
import { RemindersAddResponse } from './response';
import * as got from 'got';

/**
 * Creates a reminder.
 */
export function remindersAdd(args: StaticRemindersAddParameters): Promise<RemindersAddResponse> {
  return got
    .post('https://slack.com/api/reminders.add', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
