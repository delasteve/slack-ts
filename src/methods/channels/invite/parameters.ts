// This file is auto-generated.

export interface StaticChannelsInviteParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to invite user to.
   */
  channel: string;

  /**
   * User to invite to channel.
   */
  user: string;
}

export interface ChannelsInviteParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to invite user to.
   */
  channel: string;

  /**
   * User to invite to channel.
   */
  user: string;
}
