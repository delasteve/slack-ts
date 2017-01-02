// This file is auto-generated.

export interface StaticUsersSetPhotoParameters {
  /**
   * Authentication token.
   * Requires scope: users.profile:write
   */
  token: string;

  /**
   * File contents via multipart/form-data.
   */
  image: string;

  /**
   * X coordinate of top-left corner of crop box
   */
  crop_x?: number;

  /**
   * Y coordinate of top-left corner of crop box
   */
  crop_y?: number;

  /**
   * Width/height of crop box (always square)
   */
  crop_w?: number;
}

export interface UsersSetPhotoParameters {
  /**
   * Authentication token.
   * Requires scope: users.profile:write
   */
  token?: string;

  /**
   * File contents via multipart/form-data.
   */
  image: string;

  /**
   * X coordinate of top-left corner of crop box
   */
  crop_x?: number;

  /**
   * Y coordinate of top-left corner of crop box
   */
  crop_y?: number;

  /**
   * Width/height of crop box (always square)
   */
  crop_w?: number;
}
