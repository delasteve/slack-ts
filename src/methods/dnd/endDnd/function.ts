// This file is auto-generated.

import { StaticDndEndDndParameters } from './parameters';
import { DndEndDndResponse } from './response';
import * as got from 'got';

/**
 * Ends the current user's Do Not Disturb session immediately.
 */
export function dndEndDnd(args: StaticDndEndDndParameters): Promise<DndEndDndResponse> {
  return got
    .post('https://slack.com/api/dnd.endDnd', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
