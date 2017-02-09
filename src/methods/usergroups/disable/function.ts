// This file is auto-generated.

import { StaticUsergroupsDisableParameters } from './parameters';
import { UsergroupsDisableResponse } from './response';
import * as got from 'got';

/**
 * Disable an existing User Group
 */
export function usergroupsDisable(args: StaticUsergroupsDisableParameters): Promise<UsergroupsDisableResponse> {
  return got
    .post('https://slack.com/api/usergroups.disable', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
