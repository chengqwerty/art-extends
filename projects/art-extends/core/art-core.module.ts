import { NgModule }                         from '@angular/core';
import { ArtStringTemplateOutletDirective } from './directive/string_template_outlet.directive';
import { CommonModule }                     from '@angular/common';

@NgModule({
    declarations: [
        ArtStringTemplateOutletDirective
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [ArtStringTemplateOutletDirective]
})
export class ArtCoreModule {
}
