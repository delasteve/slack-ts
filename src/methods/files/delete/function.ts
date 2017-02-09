// This file is auto-generated.

import { StaticFilesDeleteParameters } from './parameters';
import { FilesDeleteResponse } from './response';
import * as got from 'got';

/**
 * Deletes a file.
 */
export function filesDelete(args: StaticFilesDeleteParameters): Promise<FilesDeleteResponse> {
  return got
    .post('https://slack.com/api/files.delete', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: args
    })
    .then((response) => {
      return response.body;
    });
}
