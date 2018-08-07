import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
  export class RouteService {
    BASE_URL: string = environment.BASEURL;
    constructor(private http: Http) {}
  
    getList() {
      return this.http
        .get(`${this.BASE_URL}/api/routes`)
        .pipe(map(res => res.json()));
    }

    get(id) {
      return this.http
        .get(`${this.BASE_URL}/api/routes/${id}`)
        .pipe(map(res => res.json()));
    }
  
    /* newPhone(phone) {
      return this.http
        .post(`${this.BASE_URL}/api/phone`, phone)
        .pipe(map(res => res.json()));
    }
  
    
  
    edit(phone) {
      return this.http
        .put(`${this.BASE_URL}/api/phone/${phone._id}`, phone)
        .pipe(map(res => res.json()));
    }
  
    remove(id) {
      return this.http
        .delete(`${this.BASE_URL}/api/phone/${id}`)
        .pipe(map(res => res.json()));
    }  */
  
  }