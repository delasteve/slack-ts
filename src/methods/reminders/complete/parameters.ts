// This file is auto-generated.

export interface StaticRemindersCompleteParameters {
  /**
   * Authentication token.
   * Requires scope: reminders:write
   */
  token: string;

  /**
   * The ID of the reminder to be marked as complete
   */
  reminder: string;
}

export interface RemindersCompleteParameters {
  /**
   * Authentication token.
   * Requires scope: reminders:write
   */
  token?: string;

  /**
   * The ID of the reminder to be marked as complete
   */
  reminder: string;
}
