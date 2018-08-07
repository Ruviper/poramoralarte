import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
  export class EmbassyService {
    BASE_URL: string = environment.BASEURL;
    constructor(private http: Http) {}
  
    getList() {
      return this.http
        .get(`${this.BASE_URL}/api/embassies`)
        .pipe(map(res => res.json()));
    }
}