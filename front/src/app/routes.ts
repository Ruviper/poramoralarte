import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouteListComponent } from './route-list/route-list.component';
import { TrackListComponent } from './track-list/track-list.component';

export const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'routes', component:RouteListComponent},
  { path: 'routes/:id', component:TrackListComponent}
];
