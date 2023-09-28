import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDescriptionsContainerComponent } from './art-descriptions-container.component';

describe('ArtDescriptionsContainerComponent', () => {
  let component: ArtDescriptionsContainerComponent;
  let fixture: ComponentFixture<ArtDescriptionsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDescriptionsContainerComponent]
    });
    fixture = TestBed.createComponent(ArtDescriptionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
