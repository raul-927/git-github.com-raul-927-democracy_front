import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPrincipalComponent } from './application-principal.component';

describe('ApplicationPrincipalComponent', () => {
  let component: ApplicationPrincipalComponent;
  let fixture: ComponentFixture<ApplicationPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationPrincipalComponent]
    });
    fixture = TestBed.createComponent(ApplicationPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
