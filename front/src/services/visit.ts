import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { environment } from "../environments/environment";

@Injectable()
export class VisitService {
  BASE_URL: string = environment.BASEURL;
  constructor(private http: Http) {}

  get(id) {
    return this.http
      .get(`${this.BASE_URL}/api/visits/${id}`)
      .pipe(map(res => res.json()));
  }

  getPlaces(id) {
     id = id.replace('poi:', '');
      console.log(id)
    return this.http
      .get(`${this.BASE_URL}/api/visits/place/${id}`)
      .pipe(map(res => res.json()));
  }
}
