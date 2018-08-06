import { Component, OnInit } from "@angular/core";
import { CommentService } from "../../services/comment";
import { RouteService } from "../../services/route";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from "../../services/session";

@Component({
  selector: "app-comment",
  templateUrl: "./comment-routes.component.html",
  styleUrls: ["./comment-routes.component.css"]
})
export class CommentRoutesComponent implements OnInit {
  route;
  comments;
  comment: any = {
    title: "",
    text: "",
    ownerId: ""
  };

  constructor(
    private commentService: CommentService,
    private routeService: RouteService,
    private router: Router,
    public routeAct: ActivatedRoute,
    public sessionService: SessionService
  ) {
    this.routeAct.params.subscribe(params =>
      this.routeService.get(params.id).subscribe(data => {
        this.route = data;
        this.refreshComments();
      })
    );
    this.sessionService.isLogged().subscribe(user => this.comment.ownerId = user._id)
  }

  ngOnInit() {}
  refreshComments() {
    this.commentService
      .getComments(this.route._id, 'routes')
      .subscribe(comments => {
        this.comments = comments
      });
  }

  saveComment() {
    this.comments.push(this.comment);
    this.commentService
      .saveComment(this.route._id, this.comment, 'routes')
      .subscribe(() => {
        
        this.refreshComments();
      });
    this.comment.title = "";
    this.comment.text = "";
  }
}