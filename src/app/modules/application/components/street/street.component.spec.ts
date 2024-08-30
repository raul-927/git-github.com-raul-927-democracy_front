import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetComponent } from './street.component';

describe('StreetComponent', () => {
  let component: StreetComponent;
  let fixture: ComponentFixture<StreetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StreetComponent]
    });
    fixture = TestBed.createComponent(StreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
