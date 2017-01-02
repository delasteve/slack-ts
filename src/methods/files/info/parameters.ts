// This file is auto-generated.

export interface StaticFilesInfoParameters {
  /**
   * Authentication token.
   * Requires scope: files:read
   */
  token: string;

  /**
   * Specify a file by providing its ID.
   */
  file: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}

export interface FilesInfoParameters {
  /**
   * Authentication token.
   * Requires scope: files:read
   */
  token?: string;

  /**
   * Specify a file by providing its ID.
   */
  file: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}
