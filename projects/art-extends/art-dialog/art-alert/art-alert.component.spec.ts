import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtAlertComponent } from './art-alert.component';

describe('AlertComponent', () => {
  let component: ArtAlertComponent;
  let fixture: ComponentFixture<ArtAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtAlertComponent]
    });
    fixture = TestBed.createComponent(ArtAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
