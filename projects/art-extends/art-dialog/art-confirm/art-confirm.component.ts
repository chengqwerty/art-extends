import { Component, Inject }      from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef }           from '@angular/material/dialog';

export interface ArtConfirmDialogConfig {
    header?: string;
    type?: 'primary' | 'accent' | 'warn'
    message?: string;
}

@Component({
    selector: 'app-art-confirm',
    templateUrl: './art-confirm.component.html',
    styleUrls: ['./art-confirm.component.scss']
})
export class ArtConfirmComponent {

    public colorClass = {
        'color-primary': false,
        'color-accent': false,
        'color-warn': false
    };

    constructor(public dialogRef: MatDialogRef<ArtConfirmComponent>, @Inject(DIALOG_DATA) public data: ArtConfirmDialogConfig) {
        let key = ('color-' + data.type) as ('color-primary' | 'color-accent' | 'color-warn');
        this.colorClass[key] = true;
    }

    confirm() {
        this.dialogRef.close(true);
    }

}
