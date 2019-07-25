import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Link } from '../models/Link';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ShortenService {

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

_error:any;


  constructor(private http:HttpClient) { }

  addLink(link:Link):Observable<Link>{
    return this.http.post("http://127.0.0.1:5000/add_link",link,this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    this._error = error.error
    return throwError(this._error)
  }

}
