import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsDetailsComponent } from './problems-details.component';

describe('ProblemsDetailsComponent', () => {
  let component: ProblemsDetailsComponent;
  let fixture: ComponentFixture<ProblemsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
