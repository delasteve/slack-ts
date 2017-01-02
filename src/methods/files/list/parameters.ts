// This file is auto-generated.

export interface StaticFilesListParameters {
  /**
   * Authentication token.
   * Requires scope: files:read
   */
  token: string;

  /**
   * Filter files created by a single user.
   */
  user?: string;

  /**
   * Filter files appearing in a specific channel, indicated by its ID.
   */
  channel?: string;

  /**
   * Filter files created after this timestamp (inclusive).
   */
  ts_from?: number;

  /**
   * Filter files created before this timestamp (inclusive).
   */
  ts_to?: number;

  /**
   * Filter files by type:
   * 
   * - "all" - All files
   * - "spaces" - Posts
   * - "snippets" - Snippets
   * - "images" - Image files
   * - "gdocs" - Google docs
   * - "zips" - Zip files
   * - "pdfs" - PDF files
   * 
   * You can pass multiple values in the types argument, like types=spaces,snippets. The default value is all, which does not filter the list.
   */
  types?: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}

export interface FilesListParameters {
  /**
   * Authentication token.
   * Requires scope: files:read
   */
  token?: string;

  /**
   * Filter files created by a single user.
   */
  user?: string;

  /**
   * Filter files appearing in a specific channel, indicated by its ID.
   */
  channel?: string;

  /**
   * Filter files created after this timestamp (inclusive).
   */
  ts_from?: number;

  /**
   * Filter files created before this timestamp (inclusive).
   */
  ts_to?: number;

  /**
   * Filter files by type:
   * 
   * - "all" - All files
   * - "spaces" - Posts
   * - "snippets" - Snippets
   * - "images" - Image files
   * - "gdocs" - Google docs
   * - "zips" - Zip files
   * - "pdfs" - PDF files
   * 
   * You can pass multiple values in the types argument, like types=spaces,snippets. The default value is all, which does not filter the list.
   */
  types?: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}
