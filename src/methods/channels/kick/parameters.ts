// This file is auto-generated.

export interface StaticChannelsKickParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to remove user from.
   */
  channel: string;

  /**
   * User to remove from channel.
   */
  user: string;
}

export interface ChannelsKickParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to remove user from.
   */
  channel: string;

  /**
   * User to remove from channel.
   */
  user: string;
}
