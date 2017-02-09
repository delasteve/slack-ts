// This file is auto-generated.

import { StaticGroupsArchiveParameters } from './parameters';
import { GroupsArchiveResponse } from './response';
import * as got from 'got';

/**
 * Archives a private channel.
 */
export function groupsArchive(args: StaticGroupsArchiveParameters): Promise<GroupsArchiveResponse> {
  return got
    .post('https://slack.com/api/groups.archive', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
