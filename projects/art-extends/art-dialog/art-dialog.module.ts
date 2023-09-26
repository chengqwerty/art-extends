import { NgModule }          from '@angular/core';
import { ArtAlertComponent } from './art-alert/art-alert.component';
import { MatDialogModule }   from '@angular/material/dialog';
import { ArtDialogService }  from './art-dialog.service';

@NgModule({
    declarations: [
        ArtAlertComponent
    ],
    imports: [
        MatDialogModule
    ],
    providers: [
        ArtDialogService
    ],
    exports: [ArtAlertComponent]
})
export class ArtDialogModule {
}
