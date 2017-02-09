// This file is auto-generated.

import { StaticFilesCommentsAddParameters } from './parameters';
import { FilesCommentsAddResponse } from './response';
import * as got from 'got';

/**
 * Add a comment to an existing file.
 */
export function filesCommentsAdd(args: StaticFilesCommentsAddParameters): Promise<FilesCommentsAddResponse> {
  return got
    .post('https://slack.com/api/files.comments.add', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
