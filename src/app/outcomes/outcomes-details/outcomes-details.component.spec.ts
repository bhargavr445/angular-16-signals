import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesDetailsComponent } from './outcomes-details.component';

describe('OutcomesDetailsComponent', () => {
  let component: OutcomesDetailsComponent;
  let fixture: ComponentFixture<OutcomesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OutcomesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutcomesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
