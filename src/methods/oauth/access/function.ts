// This file is auto-generated.

import { StaticOauthAccessParameters } from './parameters';
import { OauthAccessResponse } from './response';
import * as got from 'got';

/**
 * Exchanges a temporary OAuth code for an API token.
 */
export function oauthAccess(args: StaticOauthAccessParameters): Promise<OauthAccessResponse> {
  return got
    .post('https://slack.com/api/oauth.access', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
