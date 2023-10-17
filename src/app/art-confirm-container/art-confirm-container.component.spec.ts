import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtConfirmContainerComponent } from './art-confirm-container.component';

describe('ArtConfirmContainerComponent', () => {
  let component: ArtConfirmContainerComponent;
  let fixture: ComponentFixture<ArtConfirmContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtConfirmContainerComponent]
    });
    fixture = TestBed.createComponent(ArtConfirmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
