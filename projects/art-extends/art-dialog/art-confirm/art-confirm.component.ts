import { Component, Inject } from '@angular/core';
import { DIALOG_DATA }       from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Theme }             from '@think-make/art-extends/core';

export interface ArtConfirmDialogConfig {
    header?: string;
    type?: Theme
    message?: string;
}

@Component({
    selector: 'app-art-confirm',
    standalone: false,
    templateUrl: './art-confirm.component.html',
    styleUrls: ['./art-confirm.component.scss']
})
export class ArtConfirmComponent {

    public theme = {
        'primary': false,
        'accent': false,
        'warning': false,
        'error': false
    };

    constructor(public dialogRef: MatDialogRef<ArtConfirmComponent>, @Inject(DIALOG_DATA) public data: ArtConfirmDialogConfig) {
        let key = data.type as Theme;
        this.theme[key] = true;
    }

}
