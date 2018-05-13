import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';
import { Cart } from './cart.model';
import { Order } from './order.model';
import 'rxjs/add/operator/map';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    // authenticate(user: string, pass: string): Observable<boolean> {
    //     return this.http.post(this.baseUrl + 'login', name: user)
    // }

    getProducts(): Observable<any> {
        return this.http.get(this.baseUrl + 'products');
    }

    saveOrder(order: Order): Observable<any> {
        return this.http.post(this.baseUrl + 'orders', order);
    }
    
}
