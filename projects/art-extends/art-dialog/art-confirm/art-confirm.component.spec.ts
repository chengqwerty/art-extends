import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtConfirmComponent } from './art-confirm.component';

describe('ArtConfirmComponent', () => {
  let component: ArtConfirmComponent;
  let fixture: ComponentFixture<ArtConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtConfirmComponent]
    });
    fixture = TestBed.createComponent(ArtConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
