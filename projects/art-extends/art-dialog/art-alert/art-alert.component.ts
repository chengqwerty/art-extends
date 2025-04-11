import { Component, Inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef }    from '@angular/cdk/dialog';

export interface ArtAlertDialogConfig {
    type?: string,
    duration?: number,
    message?: string
}

@Component({
    selector: 'art-alert',
    standalone: false,
    templateUrl: './art-alert.component.html',
    styleUrls: ['./art-alert.component.scss']
})
export class ArtAlertComponent implements OnInit {

    public theme = {
        'primary': false,
        'accent': false,
        'warning': false,
        'error': false
    };

    constructor(public dialogRef: DialogRef, @Inject(DIALOG_DATA) public data: ArtAlertDialogConfig) {
        let key = data.type as ('primary' | 'accent' | 'warning' | 'error');
        this.theme[key] = true;
    }

    ngOnInit(): void {
    }

    close() {
        this.dialogRef.close();
    }

}
