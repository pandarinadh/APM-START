import { IProduct } from "./product";
import { Injector, Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError,  tap} from "rxjs/operators";
import { $ } from "protractor";

@Injectable({
    providedIn: 'root'
})
export class PorductService{

    productApiURL: string = '/APM-START/api/products/products.json' 

    constructor (private http1: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
       return this.http1.get<IProduct[]>(this.productApiURL).pipe(
           tap(data => console.log('all:' + JSON.stringify(data))),
           catchError(this.handleError)
       );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = 'An error occured:' +  err.error.message;
        } else{
            errorMessage = 'Server returned code:' +  err.status + ', error message is ' + err.message;
        }

        console.error(errorMessage)
        return throwError(errorMessage);

    }
}