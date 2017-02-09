// This file is auto-generated.

import { StaticFilesCommentsDeleteParameters } from './parameters';
import { FilesCommentsDeleteResponse } from './response';
import * as got from 'got';

/**
 * Deletes an existing comment on a file.
 */
export function filesCommentsDelete(args: StaticFilesCommentsDeleteParameters): Promise<FilesCommentsDeleteResponse> {
  return got
    .post('https://slack.com/api/files.comments.delete', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
