import { Component, OnInit, signal } from '@angular/core';
import { SignalService } from './signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-15-signals';
  signalTitle = '';
  isLoading = false;

  constructor(public signalService: SignalService) {

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


}
