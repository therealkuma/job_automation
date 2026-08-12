# Apps Script Notification Notes

The response spreadsheet `Automation info form (Responses)` is linked to the Google Form and contains the columns `Timestamp`, `Name`, `Position desired`, `Email`, `Resume`, and `Additional Note`.

The correct spreadsheet-bound Apps Script project is:

`https://script.google.com/home/projects/1LFULyzXQRaLQBKNITHQ8dM5xwAndo0_hlkeoimQCFUMwMLy3Kh5KfSkN/edit`

The clean notification script is saved and authorized. Its `installTrigger` execution completed successfully. The Triggers panel now verifies **1 active trigger**:

| Function | Event source | Event type | Deployment |
|---|---|---|---|
| `onFormSubmit` | From spreadsheet | On form submit | Head |

No applicant test submission was sent, so no test applicant record or applicant email was created. The workflow is ready for a real form response.
