import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../models/Link';
import {HttpClient, HttpHeaders} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ShortenService {

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


  constructor(private http:HttpClient) { }



  addLink(link:Link):Observable<Link>{
    return this.http.post("http://127.0.0.1:5000/add_link",link,this.httpOptions)
  }
}
