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
  lat: Array<number> = [40.4137818];
  lng: Array<number> = [-3.6921270999999933];
  tracks: Array<any> = [{
    coordinates: {lat:0, lng:0}
  }];

  constructor(
    private trackService: TrackService,
    public routeService: RouteService,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => 
      this.routeService.get(params.id).subscribe(data => {
        this.tracks = data && data.tracks;
      })
    )
  }

  ngOnInit() {}
}
