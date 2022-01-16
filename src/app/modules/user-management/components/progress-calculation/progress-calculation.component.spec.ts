import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCalculationComponent } from './progress-calculation.component';

describe('ProgressCalculationComponent', () => {
  let component: ProgressCalculationComponent;
  let fixture: ComponentFixture<ProgressCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
