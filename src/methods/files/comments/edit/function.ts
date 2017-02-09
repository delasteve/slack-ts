// This file is auto-generated.

import { StaticFilesCommentsEditParameters } from './parameters';
import { FilesCommentsEditResponse } from './response';
import * as got from 'got';

/**
 * Edit an existing file comment.
 */
export function filesCommentsEdit(args: StaticFilesCommentsEditParameters): Promise<FilesCommentsEditResponse> {
  return got
    .post('https://slack.com/api/files.comments.edit', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
