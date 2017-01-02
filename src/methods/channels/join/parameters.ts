// This file is auto-generated.

export interface StaticChannelsJoinParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Name of channel to join
   */
  name: string;
}

export interface ChannelsJoinParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Name of channel to join
   */
  name: string;
}
