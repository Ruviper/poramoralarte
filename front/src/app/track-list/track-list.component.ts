import { Component, OnInit } from "@angular/core";
import { RouteService } from "../../services/route";
import { TrackService } from "../../services/track";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.css"]
})
export class TrackListComponent implements OnInit {
  tracks: Array<any>;

  constructor(
    private trackService: TrackService,
    public routeService: RouteService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => 
      this.routeService.get(params.id).subscribe(data => {
        this.tracks = data.tracks;
      })
    )
  }

  ngOnInit() {}
}
