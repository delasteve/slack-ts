// This file is auto-generated.

import { StaticPinsRemoveParameters } from './parameters';
import { PinsRemoveResponse } from './response';
import * as got from 'got';

/**
 * Un-pins an item from a channel.
 */
export function pinsRemove(args: StaticPinsRemoveParameters): Promise<PinsRemoveResponse> {
  return got
    .post('https://slack.com/api/pins.remove', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
