import { Component, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef }    from '@angular/cdk/dialog';

export interface ArtAlertDialogConfig {
    type?: string,
    duration?: number,
    message?: string
}

@Component({
    selector: 'art-alert',
    templateUrl: './art-alert.component.html',
    styleUrls: ['./art-alert.component.scss']
})
export class ArtAlertComponent implements OnInit {

    public alertTypeClass = {
        'art-alert-dialog-success': false,
        'art-alert-dialog-warning': false,
        'art-alert-dialog-error': false
    };

    constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: ArtAlertDialogConfig) {
        let key = ('art-alert-dialog-' + data.type) as ('art-alert-dialog-success' | 'art-alert-dialog-warning' | 'art-alert-dialog-error');
        this.alertTypeClass[key] = true;
    }

    ngOnInit(): void {
    }

}
