// This file is auto-generated.

import { StaticGroupsSetPurposeParameters } from './parameters';
import { GroupsSetPurposeResponse } from './response';
import * as got from 'got';

/**
 * Sets the purpose for a private channel.
 */
export function groupsSetPurpose(args: StaticGroupsSetPurposeParameters): Promise<GroupsSetPurposeResponse> {
  return got
    .post('https://slack.com/api/groups.setPurpose', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
