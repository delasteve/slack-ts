// This file is auto-generated.

export interface StaticChannelsLeaveParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to leave
   */
  channel: string;
}

export interface ChannelsLeaveParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to leave
   */
  channel: string;
}
