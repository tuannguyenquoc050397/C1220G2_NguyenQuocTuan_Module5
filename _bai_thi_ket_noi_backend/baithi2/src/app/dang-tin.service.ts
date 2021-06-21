import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DangTin} from './dang-tin';
import {DanhMuc} from './danh-muc';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class DangTinService {

  URL1: string = 'http://localhost:8080/listDangTin';
  URL2: string = 'http://localhost:8080/listDanhMuc';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<DangTin[]> {
    return this.http.get<DangTin[]>(this.URL1);
  }

  save(dangTin: DangTin): Observable<void> {
    return this.http.post<void>(this.URL1, dangTin);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(this.URL1 + '/' + id);
  }
  findAllDanhMuc(): Observable<DanhMuc[]>{
    return this.http.get<DanhMuc[]>(this.URL2);
  }
}
