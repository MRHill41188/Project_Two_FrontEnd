import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CaroselComponent } from './components/carosel/carosel.component';
import { SearchComponent } from './components/search/search.component';
import { ListingComponent } from './components/listing/listing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './services/shared.service';

import { NewListingComponent } from './components/new-listing/new-listing.component';
import { ViewPastApplicationsComponent } from './components/view-past-applications/view-past-applications.component';
import { ReviewApplicantsComponent } from './components/review-applicants/review-applicants.component';
import { ViewPastListingsComponent } from './components/view-past-listings/view-past-listings.component';
import { NewTemplateComponent } from './components/new-template/new-template.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    CaroselComponent,
    SearchComponent,
    ListingComponent,
    NewListingComponent,

    ViewPastApplicationsComponent,
    ReviewApplicantsComponent,
    ReviewApplicantsComponent,
    ViewPastListingsComponent,
    NewTemplateComponent,
    CreateApplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],

  // providers can be used to register services
  providers: [ SharedService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
