// This file is auto-generated.

import { StaticDndInfoParameters } from './parameters';
import { DndInfoResponse } from './response';
import * as got from 'got';

/**
 * Retrieves a user's current Do Not Disturb status.
 */
export function dndInfo(args: StaticDndInfoParameters): Promise<DndInfoResponse> {
  return got
    .post('https://slack.com/api/dnd.info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
