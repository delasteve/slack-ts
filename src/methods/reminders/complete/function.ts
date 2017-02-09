// This file is auto-generated.

import { StaticRemindersCompleteParameters } from './parameters';
import { RemindersCompleteResponse } from './response';
import * as got from 'got';

/**
 * Marks a reminder as complete.
 */
export function remindersComplete(args: StaticRemindersCompleteParameters): Promise<RemindersCompleteResponse> {
  return got
    .post('https://slack.com/api/reminders.complete', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
