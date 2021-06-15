import {Customer} from './customer';
import {Service} from './service';
import {Employee} from './employee';

export interface Contract {
  id: string;
  startDate: string;
  endDate: string;
  customer: Customer;
  employee?: Employee;
  service?: Service;
  deposit: string;
  total?: string;
}
