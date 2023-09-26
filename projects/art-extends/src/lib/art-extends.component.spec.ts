import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtExtendsComponent } from './art-extends.component';

describe('ArtExtendsComponent', () => {
  let component: ArtExtendsComponent;
  let fixture: ComponentFixture<ArtExtendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtExtendsComponent]
    });
    fixture = TestBed.createComponent(ArtExtendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
