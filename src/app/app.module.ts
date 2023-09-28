import { NgModule }                          from '@angular/core';
import { BrowserModule }                     from '@angular/platform-browser';
import { AppComponent }                      from './app.component';
import { BrowserAnimationsModule }           from '@angular/platform-browser/animations';
import { ArtDialogModule }                   from '../../projects/art-extends/art-dialog/art-dialog.module';
import { Route, RouterModule }               from '@angular/router';
import { ArtDescriptionsContainerComponent } from './art-descriptions-container/art-descriptions-container.component';
import { ArtDescriptionsModule }             from '../../projects/art-extends/art-descriptions/art-descriptions.module';
import { MatIconModule }                     from '@angular/material/icon';

const routes: Route[] = [
    {
        path: 'descriptions',
        component: ArtDescriptionsContainerComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ArtDescriptionsContainerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ArtDialogModule,
        ArtDescriptionsModule,
        RouterModule.forRoot(routes),
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
