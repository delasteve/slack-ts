// This file is auto-generated.

import { StaticFilesListParameters } from './parameters';
import { FilesListResponse } from './response';
import * as got from 'got';

/**
 * Lists & filters team files.
 */
export function filesList(args: StaticFilesListParameters): Promise<FilesListResponse> {
  return got
    .post('https://slack.com/api/files.list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
