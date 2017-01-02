// This file is auto-generated.

export interface StaticSearchAllParameters {
  /**
   * Authentication token.
   * Requires scope: search:read
   */
  token: string;

  /**
   * Search query. May contains booleans, etc.
   */
  query: string;

  /**
   * Return matches sorted by either score or timestamp.
   */
  sort?: string;

  /**
   * Change sort direction to ascending (asc) or descending (desc).
   */
  sort_dir?: string;

  /**
   * Pass a value of 1 to enable query highlight markers (see below).
   */
  highlight?: boolean;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}

export interface SearchAllParameters {
  /**
   * Authentication token.
   * Requires scope: search:read
   */
  token?: string;

  /**
   * Search query. May contains booleans, etc.
   */
  query: string;

  /**
   * Return matches sorted by either score or timestamp.
   */
  sort?: string;

  /**
   * Change sort direction to ascending (asc) or descending (desc).
   */
  sort_dir?: string;

  /**
   * Pass a value of 1 to enable query highlight markers (see below).
   */
  highlight?: boolean;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}
