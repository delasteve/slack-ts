// This file is auto-generated.

export interface StaticChatMeMessageParameters {
  /**
   * Authentication token.
   * Requires scope: chat:write:user
   */
  token: string;

  /**
   * Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.
   */
  channel: string;

  /**
   * Text of the message to send.
   */
  text: string;
}

export interface ChatMeMessageParameters {
  /**
   * Authentication token.
   * Requires scope: chat:write:user
   */
  token?: string;

  /**
   * Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.
   */
  channel: string;

  /**
   * Text of the message to send.
   */
  text: string;
}
