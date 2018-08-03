import { Component, OnInit } from "@angular/core";
import { CommentService } from "../../services/comment";
import { RouteService } from "../../services/route";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  route;
  comments;
  comment;

  constructor(
    private commentService: CommentService,
    private routeService: RouteService,
    private router: Router,
    public routeAct: ActivatedRoute
  ) {
    this.routeAct.params.subscribe(params =>
      this.routeService.get(params.id).subscribe(data => {
        this.route = data;
        this.refreshComments();
      })
    );
  }

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
