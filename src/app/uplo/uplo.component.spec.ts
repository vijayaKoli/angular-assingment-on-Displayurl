import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploComponent } from './uplo.component';

describe('UploComponent', () => {
  let component: UploComponent;
  let fixture: ComponentFixture<UploComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploComponent]
    });
    fixture = TestBed.createComponent(UploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
