import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtDescriptionsModule }   from 'art-descriptions';
import { ArtAlertModule }          from '../../projects/art-extends/art-alert/art-alert.module';
import { ArtDialogModule }         from '../../projects/art-extends/art-dialog/art-dialog.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ArtDialogModule,
        ArtDescriptionsModule,
        ArtAlertModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
