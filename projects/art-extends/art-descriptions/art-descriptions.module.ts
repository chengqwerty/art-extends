import { NgModule }                     from '@angular/core';
import { ArtDescriptionsComponent }     from './art-descriptions.component';
import { ArtDescriptionsItemComponent } from './art-descriptions-item.component';
import { CommonModule }                 from '@angular/common';
import { MatCardModule }                from '@angular/material/card';
import { ArtCoreModule }                from '@think-make/art-extends/core';

@NgModule({
    declarations: [
        ArtDescriptionsComponent,
        ArtDescriptionsItemComponent
    ],
    imports: [
        CommonModule,
        ArtCoreModule,
        MatCardModule
    ],
    exports: [
        ArtDescriptionsComponent,
        ArtDescriptionsItemComponent
    ]
})
export class ArtDescriptionsModule {

}
