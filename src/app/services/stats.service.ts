import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Link } from '../models/Link';

@Injectable({
	providedIn: 'root'
})
export class StatsService {
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'Application/json'
		})
  };


	constructor(private http:HttpClient) {

  }

  getStats():Observable<Link>{
    return this.http.get("http://127.0.0.1:5000/stats");
  }
}
