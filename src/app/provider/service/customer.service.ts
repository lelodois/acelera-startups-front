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

    putEmpresa(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(
            URL_CUST_EMP,
            Customer.jsonEmpresa(customer),
            this.options
        );
    }

    putStartup(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(
            URL_CUST_STA,
            Customer.jsonStartup(customer),
            this.options
        );
    }
}