import { Component, OnInit } from "@angular/core";
import { CommentService } from "../../services/comment";
import { RouteService } from "../../services/route";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  comments;
  comment;
  route;
  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit() {}
  refreshComments() {
    this.commentService
      .getComments(this.route._id)
      .subscribe(comments => (this.comments = comments));
  }

  saveComment() {
    this.commentService
      .saveComment(this.route._id, this.comment)
      .subscribe(() => this.refreshComments());

    this.comment = "";
  }
}
