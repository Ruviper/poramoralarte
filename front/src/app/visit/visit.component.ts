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
  visits: Array<any> = [{
    location:{
      lat: 0,
      lng: 0
    }
  }];
  lat: Number = 40.4137818;
  lng: Number = -3.6921270999999933;
  zoom: Number = 15;
  legend: String = "lo que escribamos"

  mapOn: boolean = false;


  constructor(private visit: VisitService) {
    this.visit.get(13).subscribe(visitsApi => {
      this.visits = visitsApi;
      this.lat = this.visits[0].location.lat;
      this.lng = this.visits[0].location.lng;
      this.mapOn = true;
      console.log(this.visits)
    });
  }

  ngOnInit() {
    
    
  }
}
