// This file is auto-generated.

import { StaticFilesRevokePublicUrlParameters } from './parameters';
import { FilesRevokePublicUrlResponse } from './response';
import * as got from 'got';

/**
 * Revokes public/external sharing access for a file
 */
export function filesRevokePublicUrl(args: StaticFilesRevokePublicUrlParameters): Promise<FilesRevokePublicUrlResponse> {
  return got
    .post('https://slack.com/api/files.revokePublicURL', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
