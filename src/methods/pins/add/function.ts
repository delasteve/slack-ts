// This file is auto-generated.

import { StaticPinsAddParameters } from './parameters';
import { PinsAddResponse } from './response';
import * as got from 'got';

/**
 * Pins an item to a channel.
 */
export function pinsAdd(args: StaticPinsAddParameters): Promise<PinsAddResponse> {
  return got
    .post('https://slack.com/api/pins.add', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
