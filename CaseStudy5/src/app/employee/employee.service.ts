import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[];
  URL: string = 'http://localhost:3000/employeeList';
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.URL);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.URL + '/' + id);
  }
  save(employee: Employee): Observable<void> {
    return this.http.post<void>(this.URL, employee);
  }


}
