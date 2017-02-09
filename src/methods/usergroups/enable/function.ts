// This file is auto-generated.

import { StaticUsergroupsEnableParameters } from './parameters';
import { UsergroupsEnableResponse } from './response';
import * as got from 'got';

/**
 * Enable a User Group
 */
export function usergroupsEnable(args: StaticUsergroupsEnableParameters): Promise<UsergroupsEnableResponse> {
  return got
    .post('https://slack.com/api/usergroups.enable', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
