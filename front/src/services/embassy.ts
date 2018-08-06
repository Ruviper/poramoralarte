import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()
  export class EmbassyService {
    BASE_URL: string = "http://localhost:3000";
    constructor(private http: Http) {}
  
    getList() {
      return this.http
        .get(`${this.BASE_URL}/api/embassies`)
        .pipe(map(res => res.json()));
    }
}