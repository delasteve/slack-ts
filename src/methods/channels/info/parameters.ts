// This file is auto-generated.

export interface StaticChannelsInfoParameters {
  /**
   * Authentication token.
   * Requires scope: channels:read
   */
  token: string;

  /**
   * Channel to get info on
   */
  channel: string;
}

export interface ChannelsInfoParameters {
  /**
   * Authentication token.
   * Requires scope: channels:read
   */
  token?: string;

  /**
   * Channel to get info on
   */
  channel: string;
}
