import { Component, OnInit, effect, signal } from '@angular/core';
import { ProblemsDetailsComponent } from './problems-details/problems-details.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

type eventType = 'Increment' | 'Decrement'
@Component({
  selector: 'app-problems',
  standalone: true,
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss'],
  imports: [ProblemsDetailsComponent, RouterModule, CommonModule]
})


export class ProblemsComponent implements OnInit {

  counter = signal(0);
  actions = signal<string[]>([]);

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    effect(() => {
      this.counter();
      this.actions();
      console.log('exec..');

    });
  }

  counterClick(type: eventType) {
    if (type === 'Increment') {
      this.counter.set(1 + this.counter());
    } else {
      this.counter.set(this.counter() - 1);
    }
    this.actions.update((prevValues) => [...prevValues, type]);
    this.actions.mutate((prevValues) => [...prevValues, type]);

  }

  navigateTo(path) {
    this.router.navigate([path]);
  }

}