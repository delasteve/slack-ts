// This file is auto-generated.

export interface StaticChannelsSetTopicParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token: string;

  /**
   * Channel to set the topic of
   */
  channel: string;

  /**
   * The new topic
   */
  topic: string;
}

export interface ChannelsSetTopicParameters {
  /**
   * Authentication token.
   * Requires scope: channels:write
   */
  token?: string;

  /**
   * Channel to set the topic of
   */
  channel: string;

  /**
   * The new topic
   */
  topic: string;
}
