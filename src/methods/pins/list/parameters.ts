// This file is auto-generated.

export interface StaticPinsListParameters {
  /**
   * Authentication token.
   * Requires scope: pins:read
   */
  token: string;

  /**
   * Channel to get pinned items for.
   */
  channel: string;
}

export interface PinsListParameters {
  /**
   * Authentication token.
   * Requires scope: pins:read
   */
  token?: string;

  /**
   * Channel to get pinned items for.
   */
  channel: string;
}
