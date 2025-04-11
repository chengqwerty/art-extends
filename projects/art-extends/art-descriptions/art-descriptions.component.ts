import {
    AfterContentInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ContentChildren,
    Input,
    OnChanges,
    OnDestroy,
    OnInit, QueryList,
    SimpleChanges,
    TemplateRef
}                                                                     from '@angular/core';
import { ArtDescriptionsItemComponent }                               from './art-descriptions-item.component';
import { auditTime, merge, startWith, Subject, switchMap, takeUntil } from 'rxjs';

export interface ArtDescriptionsItemRenderProps {
    title: string | TemplateRef<void>;
    span: number;
    content: TemplateRef<void>;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'art-descriptions',
    standalone: false,
    template: `
        <div *ngIf="title || extra" class="art-descriptions-header">
            <div *ngIf="title" class="art-descriptions-title">
                <ng-container *artStringTemplateOutlet="title">{{ title }}</ng-container>
            </div>
            <div *ngIf="extra" class="art-descriptions-extra">
                <ng-container>{{ extra }}</ng-container>
            </div>
        </div>
        <div class="art-descriptions-view">
            <table class="art-descriptions-table">
                <tbody>
                <ng-container>
                    <tr class="art-descriptions-row" *ngFor="let row of itemMatrix; let i = index">
                        <ng-container *ngFor="let item of row; let isLast = last">
                            <!-- Horizontal & NOT Bordered -->
                            <ng-container *ngIf="!bordered">
                                <td class="art-descriptions-item" [colSpan]="item.span">
                                    <div class="art-descriptions-item-container">
                      <span class="art-descriptions-item-label" [class.art-descriptions-item-no-colon]="!nzColon">
                        <ng-container>
                          {{ item.title }}
                        </ng-container>
                      </span>
                                        <span class="art-descriptions-item-content">
                        <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                      </span>
                                    </div>
                                </td>
                            </ng-container>
                            <!-- Horizontal & Bordered -->
                            <ng-container *ngIf="bordered">
                                <td class="art-descriptions-item-label">
                                    <ng-container>
                                        {{ item.title }}
                                    </ng-container>
                                </td>
                                <td class="art-descriptions-item-content" [colSpan]="item.span * 2 - 1">
                                    <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                                </td>
                            </ng-container>
                        </ng-container>
                    </tr>
                </ng-container>
                </tbody>
            </table>
        </div>
    `,
    styleUrls: ['./art-descriptions.component.scss'],
    host: {
        class: '',
        '[class.art-descriptions-bordered]': 'bordered',
    }
})
export class ArtDescriptionsComponent implements OnChanges, OnDestroy, AfterContentInit, OnInit {

    @ContentChildren(ArtDescriptionsItemComponent) items!: QueryList<ArtDescriptionsItemComponent>;

    @Input() bordered: boolean = false;
    @Input() column: number = 1;
    @Input() title: string | TemplateRef<void> = '';
    @Input() extra?: string | TemplateRef<void>;
    @Input() nzColon: boolean = true;

    itemMatrix: ArtDescriptionsItemRenderProps[][] = [];
    realColumn = 3;

    private destroy$ = new Subject<void>();

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngAfterContentInit(): void {
        const contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(
            contentChange$,
            contentChange$.pipe(switchMap(() => merge(...this.items.map(i => i.inputChange$)).pipe(auditTime(16))))
        )
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.prepareMatrix();
                this.cdr.markForCheck();
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['column']) {
            this.prepareMatrix();
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngOnInit(): void {
    }

    private prepareMatrix(): void {
        if (!this.items) {
            return;
        }

        let currentRow: ArtDescriptionsItemRenderProps[] = [];
        let width = 0;

        const column = (this.realColumn = this.getColumn());
        const items = this.items.toArray();
        const length = items.length;
        const matrix: ArtDescriptionsItemRenderProps[][] = [];
        const flushRow = (): void => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        };

        for (let i = 0; i < length; i++) {
            const item = items[i];
            const {title: title, content, span: span} = item;

            width += span;

            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    console.log(`"column" is ${column} but we have row length ${width}`);
                }
                currentRow.push({title, content, span: column - (width - span)});
                flushRow();
            } else if (i === length - 1) {
                currentRow.push({title, content, span: column - (width - span)});
                flushRow();
            } else {
                currentRow.push({title, content, span});
            }
        }

        this.itemMatrix = matrix;
    }

    private getColumn(): number {
        return this.column;
    }

}
