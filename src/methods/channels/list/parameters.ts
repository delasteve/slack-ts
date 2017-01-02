// This file is auto-generated.

export interface StaticChannelsListParameters {
  /**
   * Authentication token.
   * Requires scope: channels:read
   */
  token: string;

  /**
   * Don't return archived channels.
   */
  exclude_archived?: boolean;
}

export interface ChannelsListParameters {
  /**
   * Authentication token.
   * Requires scope: channels:read
   */
  token?: string;

  /**
   * Don't return archived channels.
   */
  exclude_archived?: boolean;
}
