// This file is auto-generated.

export interface StaticFilesDeleteParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token: string;

  /**
   * ID of file to delete.
   */
  file: string;
}

export interface FilesDeleteParameters {
  /**
   * Authentication token.
   * Requires scope: files:write:user
   */
  token?: string;

  /**
   * ID of file to delete.
   */
  file: string;
}
