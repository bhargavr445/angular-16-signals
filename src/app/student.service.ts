import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseI } from './problems/ressponseI';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<ResponseI> {
    return this.http.get<ResponseI>('https://api.github.com/search/issues?q=repo:angular/components&sort=created&order=asc&page=2').pipe(
      map((response) => ({ ...response }))
    )
  }

}
