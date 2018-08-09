import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../services/session";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(public sessionService: SessionService) {}

  ngOnInit() {}
  logout() {
    this.sessionService.logout().subscribe();
  }
}
