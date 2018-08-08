import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouteListComponent } from './route-list/route-list.component';
import { TrackListComponent } from './track-list/track-list.component';
import { CommentRoutesComponent } from './comment-routes/comment-routes.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { CommentTracksComponent } from './comment-tracks/comment-tracks.component';
import { EmbassyComponent } from './embassy/embassy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitComponent } from './visit/visit.component';

export const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'', component: NavbarComponent},
  { path:'', component:FooterComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'profile', component:ProfileComponent},
  { path:'embassies', component:EmbassyComponent},
  { path:'visits', component:VisitComponent},
  { path:'routes', component:RouteListComponent},
  { path:'routes/:id', component:TrackListComponent},
  { path:'routes/:id/comments', component:CommentRoutesComponent},
  { path:'track/:id/comments', component:CommentTracksComponent}  
];
