import { Component, OnInit } from "@angular/core";
import { CommentService } from "../../services/comment";
import { TrackService } from "../../services/track";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from "../../services/session";

@Component({
  selector: "app-comment",
  templateUrl: "./comment-tracks.component.html",
  styleUrls: ["./comment-tracks.component.css"]
})
export class CommentTracksComponent implements OnInit {
  track;
  comments;
  comment: any = {
    title: "",
    text: "",
    ownerId: ""
  };

  constructor(
    private commentService: CommentService,
    private trackService: TrackService,
    private router: Router,
    public routeAct: ActivatedRoute,
    public sessionService: SessionService
  ) {
    this.routeAct.params.subscribe(params =>
      this.trackService.get(params.id).subscribe(data => {
        console.log(data)
        this.track = data;
        this.refreshComments();
      })
    );
    this.sessionService.isLogged().subscribe(user => this.comment.ownerId = user._id)
  }

  ngOnInit() {}
  refreshComments() {
    this.commentService
      .getComments(this.track._id, 'tracks')
      .subscribe(comments => {
        this.comments = comments
      });
  }

  deleteComment(id) {
    this.commentService
      .remove(id)
      .subscribe(() => this.refreshComments() );
  }

  saveComment() {
    this.comments.push(this.comment);
    this.commentService
      .saveComment(this.track._id, this.comment, 'tracks')
      .subscribe(() => {
        
        this.refreshComments();
      });
    this.comment.title = "";
    this.comment.text = "";
  }
}


