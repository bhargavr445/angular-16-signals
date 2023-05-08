import { Component, OnInit, effect, signal } from '@angular/core';
import { ProblemsDetailsComponent } from './problems-details/problems-details.component';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { StudentService } from '../student.service';
import { ResponseI } from './ressponseI';

type eventType = 'Increment' | 'Decrement';

@Component({
  selector: 'app-problems',
  standalone: true,
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss'],
  imports: [ProblemsDetailsComponent, RouterModule, NgFor]
})


export class ProblemsComponent implements OnInit {

  counter = signal(0);
  actions = signal<string[]>([]);
  responseAction = signal<ResponseI>(this.initialResponse());

  constructor(private router: Router,
    private studentService: StudentService) {

  }

  ngOnInit(): void {
    effect(() => {
      this.counter();
      this.actions();
      console.log('exec..');

    });
  }

  initialResponse(): ResponseI {
    return { total_count: 0, incomplete_results: false, items: [] }
  }

  counterClick(type: eventType): void {
    if (type === 'Increment') {
      this.counter.set(1 + this.counter());
    } else {
      this.counter.set(this.counter() - 1);
    }
    // this.actions.update((prevValues) => [...prevValues, type]);
    this.actions.mutate((prevValues) => prevValues.push(type));
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  getData(): void {
    this.responseAction.set(this.initialResponse());
    this.studentService.getInfo().subscribe({
      next: (response: ResponseI) => {
        this.responseAction.set(response);
      },
      error: (error) => {

      }
    })
  }

}