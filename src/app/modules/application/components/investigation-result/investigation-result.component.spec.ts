import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationResultComponent } from './investigation-result.component';

describe('InvestigationResultComponent', () => {
  let component: InvestigationResultComponent;
  let fixture: ComponentFixture<InvestigationResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestigationResultComponent]
    });
    fixture = TestBed.createComponent(InvestigationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
