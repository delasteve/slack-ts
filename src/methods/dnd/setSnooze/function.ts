// This file is auto-generated.

import { StaticDndSetSnoozeParameters } from './parameters';
import { DndSetSnoozeResponse } from './response';
import * as got from 'got';

/**
 * Turns on Do Not Disturb mode for the current user, or changes its duration.
 */
export function dndSetSnooze(args: StaticDndSetSnoozeParameters): Promise<DndSetSnoozeResponse> {
  return got
    .post('https://slack.com/api/dnd.setSnooze', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
