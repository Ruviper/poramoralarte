import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import "rxjs";

@Injectable()
export class CommentService {
  BASE_URL: string = "http://localhost:3000";
  constructor(private http: Http) {}

  getComments(id, type) {
    if (type === "routes") {
      return this.http
        .get(`${this.BASE_URL}/api/comments/routes/${id}`)
        .pipe(map(res => res.json()));
    } else if (type === "tracks") {
      return this.http
        .get(`${this.BASE_URL}/api/comments/tracks/${id}`)
        .pipe(map(res => res.json()));
    }
  }

  saveComment(id, comment, type) {
    if (type === "routes") {
      return this.http
        .post(`${this.BASE_URL}/api/comments/routes/${id}/comments`, {
          comment
        })
        .pipe(map(res => res.json()));
    } else if (type === "tracks") {
      return this.http
        .post(`${this.BASE_URL}/api/comments/tracks/${id}/comments`, {
          comment
        })
        .pipe(map(res => res.json()));
    }
  }
}
