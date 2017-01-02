// This file is auto-generated.

export interface StaticRemindersDeleteParameters {
  /**
   * Authentication token.
   * Requires scope: reminders:write
   */
  token: string;

  /**
   * The ID of the reminder
   */
  reminder: string;
}

export interface RemindersDeleteParameters {
  /**
   * Authentication token.
   * Requires scope: reminders:write
   */
  token?: string;

  /**
   * The ID of the reminder
   */
  reminder: string;
}
