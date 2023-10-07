import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDialogContainerComponent } from './art-dialog-container.component';

describe('ArtDialogContainerComponent', () => {
  let component: ArtDialogContainerComponent;
  let fixture: ComponentFixture<ArtDialogContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtDialogContainerComponent]
    });
    fixture = TestBed.createComponent(ArtDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
