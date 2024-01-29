import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietesArchitectureComponent } from './societes-architecture.component';

describe('SocietesArchitectureComponent', () => {
  let component: SocietesArchitectureComponent;
  let fixture: ComponentFixture<SocietesArchitectureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocietesArchitectureComponent]
    });
    fixture = TestBed.createComponent(SocietesArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
