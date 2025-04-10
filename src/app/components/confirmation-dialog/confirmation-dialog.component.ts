import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
// This component is a confirmation dialog that asks the user to confirm an action.
// It uses Angular Material's dialog component to display a modal with a message and two buttons: "Confirm" and "Cancel".
// The `onConfirm` method closes the dialog and returns `true`, while the `onCancel` method closes the dialog and returns `false`.
// The `MAT_DIALOG_DATA` injection token is used to pass data into the dialog, in this case, a message to display.
// The `MatDialogRef` is used to control the dialog, including closing it and passing data back to the calling component.
// The `@Component` decorator defines the selector, template URL, and styles for the component.
