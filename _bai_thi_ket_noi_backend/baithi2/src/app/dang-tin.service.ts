import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DangTin} from './dang-tin';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class DangTinService {

  URL: string = 'http://localhost:8080/list';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<DangTin[]> {
    return this.http.get<DangTin[]>(this.URL);
  }

  save(dangTin: DangTin): Observable<void> {
    return this.http.post<void>(this.URL, dangTin);
  }
}
