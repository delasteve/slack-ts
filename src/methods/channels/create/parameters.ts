// This file is auto-generated.

export interface StaticChannelsCreateParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Name of channel to create
   */
  name: string;
}

export interface ChannelsCreateParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Name of channel to create
   */
  name: string;
}
