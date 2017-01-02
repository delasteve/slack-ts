// This file is auto-generated.

export interface StaticFilesUploadParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File contents via multipart/form-data. If omitting this parameter, you must submit content.
   */
  file?: string;

  /**
   * File contents via a POST variable. If omitting this parameter, you must provide a file.
   */
  content?: string;

  /**
   * A file type identifier.
   */
  filetype?: string;

  /**
   * Filename of file.
   */
  filename: string;

  /**
   * Title of file.
   */
  title?: string;

  /**
   * Initial comment to add to file.
   */
  initial_comment?: string;

  /**
   * Comma-separated list of channel names or IDs where the file will be shared.
   */
  channels?: string;
}

export interface FilesUploadParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File contents via multipart/form-data. If omitting this parameter, you must submit content.
   */
  file?: string;

  /**
   * File contents via a POST variable. If omitting this parameter, you must provide a file.
   */
  content?: string;

  /**
   * A file type identifier.
   */
  filetype?: string;

  /**
   * Filename of file.
   */
  filename: string;

  /**
   * Title of file.
   */
  title?: string;

  /**
   * Initial comment to add to file.
   */
  initial_comment?: string;

  /**
   * Comma-separated list of channel names or IDs where the file will be shared.
   */
  channels?: string;
}
