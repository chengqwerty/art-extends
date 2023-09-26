import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDescriptionsComponent } from './art-descriptions.component';

describe('ArtDescriptionsComponent', () => {
    let component: ArtDescriptionsComponent;
    let fixture: ComponentFixture<ArtDescriptionsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ArtDescriptionsComponent]
        });
        fixture = TestBed.createComponent(ArtDescriptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
