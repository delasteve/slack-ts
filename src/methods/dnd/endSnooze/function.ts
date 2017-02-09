// This file is auto-generated.

import { StaticDndEndSnoozeParameters } from './parameters';
import { DndEndSnoozeResponse } from './response';
import * as got from 'got';

/**
 * Ends the current user's snooze mode immediately.
 */
export function dndEndSnooze(args: StaticDndEndSnoozeParameters): Promise<DndEndSnoozeResponse> {
  return got
    .post('https://slack.com/api/dnd.endSnooze', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
