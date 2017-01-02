// This file is auto-generated.

export interface StaticChannelsSetPurposeParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to set the purpose of
   */
  channel: string;

  /**
   * The new purpose
   */
  purpose: string;
}

export interface ChannelsSetPurposeParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to set the purpose of
   */
  channel: string;

  /**
   * The new purpose
   */
  purpose: string;
}
