// This file is auto-generated.

import { StaticFilesUploadParameters } from './parameters';
import { FilesUploadResponse } from './response';
import * as got from 'got';

/**
 * Uploads or creates a file.
 */
export function filesUpload(args: StaticFilesUploadParameters): Promise<FilesUploadResponse> {
  return got
    .post('https://slack.com/api/files.upload', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
