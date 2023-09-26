import { NgModule }                 from '@angular/core';
import { ArtDescriptionsComponent } from './art-descriptions.component';
import { ArtDescriptionsItemComponent } from './art-descriptions-item.component';


@NgModule({
    declarations: [
        ArtDescriptionsComponent,
        ArtDescriptionsItemComponent
    ],
    imports: [],
    exports: [
        ArtDescriptionsComponent
    ]
})
export class ArtDescriptionsModule {
}
