// This file is auto-generated.

import { StaticFilesInfoParameters } from './parameters';
import { FilesInfoResponse } from './response';
import * as got from 'got';

/**
 * Gets information about a team file.
 */
export function filesInfo(args: StaticFilesInfoParameters): Promise<FilesInfoResponse> {
  return got
    .post('https://slack.com/api/files.info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
