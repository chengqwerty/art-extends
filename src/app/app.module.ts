import { NgModule }                          from '@angular/core';
import { BrowserModule }                     from '@angular/platform-browser';
import { AppComponent }                      from './app.component';
import { BrowserAnimationsModule }           from '@angular/platform-browser/animations';
import { ArtDialogModule }                   from '@think-make/art-extends/art-dialog';
import { Route, RouterModule }               from '@angular/router';
import { ArtDescriptionsContainerComponent } from './art-descriptions-container/art-descriptions-container.component';
import { ArtDescriptionsModule }             from '@think-make/art-extends/art-descriptions';
import { MatIconModule }                     from '@angular/material/icon';
import { ArtDialogContainerComponent }       from './art-dialog-container/art-dialog-container.component';
import { MatButtonModule }                   from '@angular/material/button';

const routes: Route[] = [
    {
        path: 'descriptions',
        component: ArtDescriptionsContainerComponent
    },
    {
        path: 'dialog',
        component: ArtDialogContainerComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ArtDescriptionsContainerComponent,
        ArtDialogContainerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ArtDialogModule,
        ArtDescriptionsModule,
        RouterModule.forRoot(routes),
        MatIconModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
