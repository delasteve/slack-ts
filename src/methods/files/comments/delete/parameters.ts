// This file is auto-generated.

export interface StaticFilesCommentsDeleteParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File to delete a comment from.
   */
  file: string;

  /**
   * The comment to delete.
   */
  id: string;
}

export interface FilesCommentsDeleteParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File to delete a comment from.
   */
  file: string;

  /**
   * The comment to delete.
   */
  id: string;
}
