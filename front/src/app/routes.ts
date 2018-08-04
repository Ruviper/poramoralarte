import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouteListComponent } from './route-list/route-list.component';
import { TrackListComponent } from './track-list/track-list.component';
import { CommentComponent } from './comment/comment.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'', component:FooterComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'profile', component:ProfileComponent},
  { path:'routes', component:RouteListComponent},
  { path:'routes/:id', component:TrackListComponent},
  { path:'routes/:id/comments', component:CommentComponent}
];
