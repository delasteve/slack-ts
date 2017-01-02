// This file is auto-generated.

export interface StaticMpimCloseParameters {
  /**
   * Authentication token.
   * Requires scope: mpim:write
   */
  token: string;

  /**
   * MPIM to close.
   */
  channel: string;
}

export interface MpimCloseParameters {
  /**
   * Authentication token.
   * Requires scope: mpim:write
   */
  token?: string;

  /**
   * MPIM to close.
   */
  channel: string;
}
