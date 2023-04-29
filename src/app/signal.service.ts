import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  testValue = signal('Test Value');
  appState = signal({
    initialValue: '',
    studentNames: []
  });


  constructor() { }
}
