// This file is auto-generated.

export interface StaticFilesSharedPublicUrlParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File to share
   */
  file: string;
}

export interface FilesSharedPublicUrlParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File to share
   */
  file: string;
}
