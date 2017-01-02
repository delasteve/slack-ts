// This file is auto-generated.

export interface StaticOauthAccessParameters {
  /**
   * Issued when you created your application.
   */
  client_id: string;

  /**
   * Issued when you created your application.
   */
  client_secret: string;

  /**
   * The code param returned via the OAuth callback.
   */
  code: string;

  /**
   * This must match the originally submitted URI (if one was sent).
   */
  redirect_uri?: string;
}

export interface OauthAccessParameters {
  /**
   * Issued when you created your application.
   */
  client_id: string;

  /**
   * Issued when you created your application.
   */
  client_secret: string;

  /**
   * The code param returned via the OAuth callback.
   */
  code: string;

  /**
   * This must match the originally submitted URI (if one was sent).
   */
  redirect_uri?: string;
}
