import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  routes: Array<any>;

  constructor(public routeService : RouteService) { 
    this.routeService.getList().subscribe(data => this.routes = data);
  }

  ngOnInit() {
  }

}
