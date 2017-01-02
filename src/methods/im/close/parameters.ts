// This file is auto-generated.

export interface StaticImCloseParameters {
  /**
   * Authentication token.
   * Requires scope: im:write
   */
  token: string;

  /**
   * Direct message channel to close.
   */
  channel: string;
}

export interface ImCloseParameters {
  /**
   * Authentication token.
   * Requires scope: im:write
   */
  token?: string;

  /**
   * Direct message channel to close.
   */
  channel: string;
}
