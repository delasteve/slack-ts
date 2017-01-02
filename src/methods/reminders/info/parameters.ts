// This file is auto-generated.

export interface StaticRemindersInfoParameters {
  /**
   * Authentication token.
   * Requires scope: reminders:read
   */
  token: string;

  /**
   * The ID of the reminder
   */
  reminder: string;
}

export interface RemindersInfoParameters {
  /**
   * Authentication token.
   * Requires scope: reminders:read
   */
  token?: string;

  /**
   * The ID of the reminder
   */
  reminder: string;
}
