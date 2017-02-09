// This file is auto-generated.

import { StaticFilesSharedPublicUrlParameters } from './parameters';
import { FilesSharedPublicUrlResponse } from './response';
import * as got from 'got';

/**
 * Enables a file for public/external sharing.
 */
export function filesSharedPublicUrl(args: StaticFilesSharedPublicUrlParameters): Promise<FilesSharedPublicUrlResponse> {
  return got
    .post('https://slack.com/api/files.sharedPublicURL', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
