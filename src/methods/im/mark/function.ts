// This file is auto-generated.

import { StaticImMarkParameters } from './parameters';
import { ImMarkResponse } from './response';
import * as got from 'got';

/**
 * Sets the read cursor in a direct message channel.
 */
export function imMark(args: StaticImMarkParameters): Promise<ImMarkResponse> {
  return got
    .post('https://slack.com/api/im.mark', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
