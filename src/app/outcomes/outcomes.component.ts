import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-outcomes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.scss']
})
export class OutcomesComponent {

  constructor(private router: Router) {

  }

  navigateTo() {
    this.router.navigate(['outcomes/details']);
  }

}
