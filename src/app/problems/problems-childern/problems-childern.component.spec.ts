import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsChildernComponent } from './problems-childern.component';

describe('ProblemsChildernComponent', () => {
  let component: ProblemsChildernComponent;
  let fixture: ComponentFixture<ProblemsChildernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemsChildernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemsChildernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
