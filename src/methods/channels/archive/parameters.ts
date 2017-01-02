// This file is auto-generated.

export interface StaticChannelsArchiveParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to archive
   */
  channel: string;
}

export interface ChannelsArchiveParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to archive
   */
  channel: string;
}
