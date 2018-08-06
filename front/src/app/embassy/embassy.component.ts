import { Component, OnInit } from "@angular/core";
import { EmbassyService } from "../../services/embassy";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-embassy",
  templateUrl: "./embassy.component.html",
  styleUrls: ["./embassy.component.css"]
})
export class EmbassyComponent implements OnInit {
  lat: Array<number> = [40.4137818];
  lng: Array<number> = [-3.6921270999999933];
  embassies: Array<any> = [{
      coordinates: { lat:0, lng:0 }
    }];

  constructor(
    private embassyService: EmbassyService,
    public route: ActivatedRoute
  ) {
    this.embassyService.getList().subscribe(data => {
      console.log(data)
      this.embassies = data
    });
  }

  ngOnInit() {}
}
