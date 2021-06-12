import {Customer} from './customer';
import {Employee} from './employee';
import {Service} from './service';

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
