import { Component, OnInit, signal } from '@angular/core';
import { SignalService } from './signal.service';
import { Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CommonModule]
})
export class AppComponent implements OnInit {


  title = 'angular-15-signals';
  signalTitle = '';
  isLoading = false;

  


  constructor(public signalService: SignalService, private router: Router, private studentService: StudentService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.signalService.testValue.set('test value changes..');
      // this.signalService.appState.set({s
      //   initialValue: 'hello',
      //   studentNames: []
      // });
      console.log(this.signalService.appState());
    }, 3000);
    this.isLoading = true;
    console.log(this.signalService.appState().initialValue);
    console.log(this.signalService.testValue);
  }

  navigateTo(path) {
    this.studentService.getInfo().subscribe(d => console.log(d)); 
    this.router.navigate([path]);
  }


}
