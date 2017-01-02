// This file is auto-generated.

export interface StaticReactionsListParameters {
  /**
   * Authentication token.
   * Requires scope: reactions:read
   */
  token: string;

  /**
   * Show reactions made by this user. Defaults to the authed user.
   */
  user?: string;

  /**
   * If true always return the complete reaction list.
   */
  full?: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}

export interface ReactionsListParameters {
  /**
   * Authentication token.
   * Requires scope: reactions:read
   */
  token?: string;

  /**
   * Show reactions made by this user. Defaults to the authed user.
   */
  user?: string;

  /**
   * If true always return the complete reaction list.
   */
  full?: string;

  /**
   * Number of items to return per page.
   */
  count?: number;

  /**
   * Page number of results to return.
   */
  page?: number;
}
