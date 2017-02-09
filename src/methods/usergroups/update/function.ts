// This file is auto-generated.

import { StaticUsergroupsUpdateParameters } from './parameters';
import { UsergroupsUpdateResponse } from './response';
import * as got from 'got';

/**
 * Update an existing User Group
 */
export function usergroupsUpdate(args: StaticUsergroupsUpdateParameters): Promise<UsergroupsUpdateResponse> {
  return got
    .post('https://slack.com/api/usergroups.update', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
