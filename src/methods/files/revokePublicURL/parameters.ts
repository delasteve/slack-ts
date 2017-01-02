// This file is auto-generated.

export interface StaticFilesRevokePublicUrlParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File to revoke
   */
  file: string;
}

export interface FilesRevokePublicUrlParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File to revoke
   */
  file: string;
}
