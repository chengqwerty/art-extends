/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import {
    Directive,
    EmbeddedViewRef,
    Input,
    OnChanges,
    SimpleChange,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

export type ArtSafeAny = any;

@Directive({
    selector: '[artStringTemplateOutlet]',
    standalone: false,
    exportAs: 'artStringTemplateOutlet'
})
export class ArtStringTemplateOutletDirective<_T = unknown> implements OnChanges {
    private embeddedViewRef: EmbeddedViewRef<ArtSafeAny> | null = null;
    private context = new ArtStringTemplateOutletContext();
    @Input() artStringTemplateOutletContext: ArtSafeAny | null = null;
    @Input() artStringTemplateOutlet: ArtSafeAny | TemplateRef<ArtSafeAny> = null;

    static ngTemplateContextGuard<T>(
        _dir: ArtStringTemplateOutletDirective<T>,
        _ctx: ArtSafeAny
    ): _ctx is ArtStringTemplateOutletContext {
        return true;
    }

    private recreateView(): void {
        this.viewContainer.clear();
        const isTemplateRef = this.artStringTemplateOutlet instanceof TemplateRef;
        const templateRef = (isTemplateRef ? this.artStringTemplateOutlet : this.templateRef) as ArtSafeAny;
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(
            templateRef,
            isTemplateRef ? this.artStringTemplateOutletContext : this.context
        );
    }

    private updateContext(): void {
        const isTemplateRef = this.artStringTemplateOutlet instanceof TemplateRef;
        const newCtx = isTemplateRef ? this.artStringTemplateOutletContext : this.context;
        const oldCtx = this.embeddedViewRef!.context as ArtSafeAny;
        if (newCtx) {
            for (const propName of Object.keys(newCtx)) {
                oldCtx[propName] = newCtx[propName];
            }
        }
    }

    constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<ArtSafeAny>) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        const {artStringTemplateOutletContext, artStringTemplateOutlet} = changes;
        const shouldRecreateView = (): boolean => {
            let shouldOutletRecreate = false;
            if (artStringTemplateOutlet) {
                if (artStringTemplateOutlet.firstChange) {
                    shouldOutletRecreate = true;
                } else {
                    const isPreviousOutletTemplate = artStringTemplateOutlet.previousValue instanceof TemplateRef;
                    const isCurrentOutletTemplate = artStringTemplateOutlet.currentValue instanceof TemplateRef;
                    shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
                }
            }
            const hasContextShapeChanged = (ctxChange: SimpleChange): boolean => {
                const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
                const currCtxKeys = Object.keys(ctxChange.currentValue || {});
                if (prevCtxKeys.length === currCtxKeys.length) {
                    for (const propName of currCtxKeys) {
                        if (prevCtxKeys.indexOf(propName) === -1) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    return true;
                }
            };
            const shouldContextRecreate =
                artStringTemplateOutletContext && hasContextShapeChanged(artStringTemplateOutletContext);
            return shouldContextRecreate || shouldOutletRecreate;
        };

        if (artStringTemplateOutlet) {
            this.context.$implicit = artStringTemplateOutlet.currentValue;
        }

        const recreateView = shouldRecreateView();
        if (recreateView) {
            /** recreate view when context shape or outlet change **/
            this.recreateView();
        } else {
            /** update context **/
            this.updateContext();
        }
    }
}

export class ArtStringTemplateOutletContext {
    public $implicit: ArtSafeAny;
}
