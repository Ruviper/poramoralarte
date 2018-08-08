import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session';
import { HttpModule } from '@angular/http';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteService } from '../services/route';
import { HomeComponent } from './home/home.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackService } from '../services/track';
import { CommentRoutesComponent } from './comment-routes/comment-routes.component';

import { AgmCoreModule } from '@agm/core';
import { CommentService } from '../services/comment';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { CommentTracksComponent } from './comment-tracks/comment-tracks.component';
import { EmbassyComponent } from './embassy/embassy.component';
import { EmbassyService } from '../services/embassy';
import { NavbarComponent } from './navbar/navbar.component';
import { VisitComponent } from './visit/visit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RouteListComponent,
    TrackListComponent,
    CommentTracksComponent,
    CommentRoutesComponent,
    ProfileComponent,
    FooterComponent,
    EmbassyComponent,
    NavbarComponent,
    VisitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMr7l3yXxN3hJdhgapxECHdHDNwhfGjrY'
    })
  ],
  providers: [SessionService, RouteService, TrackService, CommentService, EmbassyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
