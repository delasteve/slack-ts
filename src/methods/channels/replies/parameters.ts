// This file is auto-generated.

export interface StaticChannelsRepliesParameters {
  /**
   * Authentication token.
   * Requires scope: channels:history
   */
  token: string;

  /**
   * Channel to fetch thread from
   */
  channel: string;

  /**
   * Unique identifier of a thread's parent message
   */
  thread_ts: number;
}

export interface ChannelsRepliesParameters {
  /**
   * Authentication token.
   * Requires scope: channels:history
   */
  token?: string;

  /**
   * Channel to fetch thread from
   */
  channel: string;

  /**
   * Unique identifier of a thread's parent message
   */
  thread_ts: number;
}
