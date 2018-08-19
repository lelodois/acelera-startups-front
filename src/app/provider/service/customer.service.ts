import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URL_CUST_EMP, URL_CUST_STA} from '../url-util.service';
import {Customer} from '../model/customer.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) {
    }

    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    saveEmpresa(customer: Customer): Observable<Customer> {
        const body = {
            'name': customer.name,
            'description': customer.description,
            'email': customer.email,
            'address': customer.address,
            'phone': customer.phone
        };
        return this.http.post<Customer>(URL_CUST_EMP, body, this.options);
    }

    saveStartup(customer: Customer): Observable<Customer> {
        const body = {
            'name': customer.name,
            'description': customer.description,
            'email': customer.email,
            'address': customer.address,
            'phone': customer.phone,
            'findInvestiments': customer.findInvestiments,
            'mentoring': customer.mentoring
        };
        return this.http.post<Customer>(URL_CUST_STA, body, this.options);
    }
}