import {TypeCustomer} from './type-customer';

export interface Customer {
  id: string;
  name: string;
  dateOfBirth: string;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  typeCustomer: TypeCustomer;

}
