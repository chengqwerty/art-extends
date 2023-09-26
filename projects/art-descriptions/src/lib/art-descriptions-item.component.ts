import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    TemplateRef,
    ViewChild,
    ViewEncapsulation
}                  from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    selector: 'art-art-alert-descriptions-item',
    template: `
        <ng-template>
            <ng-content></ng-content>
        </ng-template>
    `,
    exportAs: 'nzDescriptionsItem',
    preserveWhitespaces: false
})
export class ArtDescriptionsItemComponent implements OnChanges, OnDestroy {
    static ngAcceptInputType_nzSpan: number | string | undefined | null;

    @ViewChild(TemplateRef, {static: true}) content!: TemplateRef<void>;

    @Input() nzSpan = 1;
    @Input() nzTitle: string | TemplateRef<void> = '';

    readonly inputChange$ = new Subject<void>();

    ngOnChanges(): void {
        this.inputChange$.next();
    }

    ngOnDestroy(): void {
        this.inputChange$.complete();
    }
}
