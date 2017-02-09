// This file is auto-generated.

import { StaticGroupsRepliesParameters } from './parameters';
import { GroupsRepliesResponse } from './response';
import * as got from 'got';

/**
 * Retrieve a thread of messages posted to a private channel
 */
export function groupsReplies(args: StaticGroupsRepliesParameters): Promise<GroupsRepliesResponse> {
  return got
    .post('https://slack.com/api/groups.replies', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
