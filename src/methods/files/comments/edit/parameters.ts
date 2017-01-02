// This file is auto-generated.

export interface StaticFilesCommentsEditParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * File containing the comment to edit.
   */
  file: string;

  /**
   * The comment to edit.
   */
  id: string;

  /**
   * Text of the comment to edit.
   */
  comment: string;
}

export interface FilesCommentsEditParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * File containing the comment to edit.
   */
  file: string;

  /**
   * The comment to edit.
   */
  id: string;

  /**
   * Text of the comment to edit.
   */
  comment: string;
}
