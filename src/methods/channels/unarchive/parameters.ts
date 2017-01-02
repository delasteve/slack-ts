// This file is auto-generated.

export interface StaticChannelsUnarchiveParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to unarchive
   */
  channel: string;
}

export interface ChannelsUnarchiveParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to unarchive
   */
  channel: string;
}
