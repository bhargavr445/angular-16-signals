import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesRosterComponent } from './outcomes-roster.component';

describe('OutcomesRosterComponent', () => {
  let component: OutcomesRosterComponent;
  let fixture: ComponentFixture<OutcomesRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OutcomesRosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutcomesRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
