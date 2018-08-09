import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { VisitService } from "../../services/visit";

@Component({
  selector: "app-visit",
  templateUrl: "./visit-info.component.html",
  styleUrls: ["./visit-info.component.css"],

  providers: [VisitService]
})
export class VisitInfoComponent implements OnInit {
  visit: any = {
    location: {
      lat: 0,
      lng: 0
    }
  };
  lat: Number = 40.4137818;
  lng: Number = -3.6921270999999933;
  zoom: Number = 15;
  mapOn: boolean = false;

  constructor(
    private visitService: VisitService,
    public routeAct: ActivatedRoute
  ) {
    this.routeAct.params.subscribe(params => {
      console.log(params.id)
      this.visitService.getPlaces(params.id).subscribe(visitPlace => {
        this.visit = visitPlace;
        this.lat = this.visit.location.lat;
        this.lng = this.visit.location.lng;
        this.mapOn = true;
      });
    });
  }

  ngOnInit() {}
}
