import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { VisitService } from "../../services/visit";

@Component({
  selector: "app-visit",
  templateUrl: "./visit.component.html",
  styleUrls: ["./visit.component.css"],

  providers:[
    VisitService
  ]
})
export class VisitComponent implements OnInit {
  visits;
  constructor(private visit: VisitService) {}

  ngOnInit() {
    this.visit.get(13).subscribe(visitsApi => {
      console.log(visitsApi);
      this.visits = visitsApi;
    });
  }
}
