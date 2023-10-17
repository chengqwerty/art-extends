import { NgModule }            from '@angular/core';

import { MatButtonModule }     from '@angular/material/button';
import { MatDialogModule }     from '@angular/material/dialog';

import { ArtDialogService }    from './art-dialog.service';
import { ArtAlertComponent }   from './art-alert/art-alert.component';
import { ArtConfirmComponent } from './art-confirm/art-confirm.component';


@NgModule({
    declarations: [
        ArtAlertComponent,
        ArtConfirmComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    providers: [
        ArtDialogService
    ],
    exports: [
        ArtAlertComponent,
        ArtConfirmComponent
    ]
})
export class ArtDialogModule {
}
