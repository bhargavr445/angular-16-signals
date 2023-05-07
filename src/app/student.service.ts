import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('https://api.github.com/search/issues?q=repo:angular/components&sort=created&order=asc&page=2').pipe(
      map((response) => ({ ...response }))
    )
  }

}
