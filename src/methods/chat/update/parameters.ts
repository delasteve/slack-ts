// This file is auto-generated.

export interface StaticChatUpdateParameters {
  /**
   * Authentication token.
   * Requires scope: chat:write:bot or chat:write:user
   */
  token: string;

  /**
   * Timestamp of the message to be updated.
   */
  ts: number;

  /**
   * Channel containing the message to be updated.
   */
  channel: string;

  /**
   * New text for the message, using the default formatting rules.
   */
  text: string;

  /**
   * Structured message attachments.
   */
  attachments?: string;

  /**
   * Change how messages are treated. Defaults to client, unlike chat.postMessage.
   */
  parse?: string;

  /**
   * Find and link channel names and usernames. Defaults to none. This parameter should be used in conjunction with parse. To set link_names to 1, specify a parse mode of full.
   */
  link_names?: boolean;

  /**
   * Pass true to update the message as the authed user. Bot users in this context are considered authed users.
   */
  as_user?: boolean;
}

export interface ChatUpdateParameters {
  /**
   * Authentication token.
   * Requires scope: chat:write:bot or chat:write:user
   */
  token?: string;

  /**
   * Timestamp of the message to be updated.
   */
  ts: number;

  /**
   * Channel containing the message to be updated.
   */
  channel: string;

  /**
   * New text for the message, using the default formatting rules.
   */
  text: string;

  /**
   * Structured message attachments.
   */
  attachments?: string;

  /**
   * Change how messages are treated. Defaults to client, unlike chat.postMessage.
   */
  parse?: string;

  /**
   * Find and link channel names and usernames. Defaults to none. This parameter should be used in conjunction with parse. To set link_names to 1, specify a parse mode of full.
   */
  link_names?: boolean;

  /**
   * Pass true to update the message as the authed user. Bot users in this context are considered authed users.
   */
  as_user?: boolean;
}
