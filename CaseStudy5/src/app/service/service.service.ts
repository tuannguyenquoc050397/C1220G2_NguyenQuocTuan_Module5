import {Injectable} from '@angular/core';
import {Service} from '../model/service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  services: Service[];

  URL: string = 'http://localhost:3000/serviceList';
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.URL);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.URL + '/' + id);
  }
  save(service: Service): Observable<void> {
    return this.http.post<void>(this.URL, service);
  }
}
