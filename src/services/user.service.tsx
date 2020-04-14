import { Observable, BehaviorSubject } from 'rxjs';

import axios from 'axios';

const userSubject = new BehaviorSubject<any>(null);

const user$ = userSubject.asObservable();

const updateCustomer: any = (data: any) => {
  userSubject.next(data);
};

export const UserService = {
  getCustomerData() {
    const customerData$ = Observable.create((observer: any) => {
      axios.get('assets/customer.json')
        .then((response: any) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: any) => {
          observer.error(error);
        });
    });

    return customerData$;
  },

  getCustomer() {
    return axios.get('assets/customer.json')
      .then(response => updateCustomer(response.data))
      .catch(error => console.log(error));
  },
};

export default user$;
