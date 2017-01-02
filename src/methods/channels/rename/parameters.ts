// This file is auto-generated.

export interface StaticChannelsRenameParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to rename
   */
  channel: string;

  /**
   * New name for channel.
   */
  name: string;
}

export interface ChannelsRenameParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to rename
   */
  channel: string;

  /**
   * New name for channel.
   */
  name: string;
}
