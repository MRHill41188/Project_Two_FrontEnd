import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ListingComponent } from './components/listing/listing.component';
import { SearchComponent } from './components/search/search.component';
import { ViewPastApplicationsComponent } from './components/view-past-applications/view-past-applications.component';
import { ViewPastListingsComponent } from './components/view-past-listings/view-past-listings.component';
import { NewListingComponent } from './components/new-listing/new-listing.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { ReviewApplicantsComponent } from './components/review-applicants/review-applicants.component';
import { NewTemplateComponent } from './components/new-template/new-template.component';

/**
 * Registration of our routes
 * when the URL context is /pizzas then the router-outlet will render PizzaComponent
 */

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'search', component: SearchComponent},
  { path: 'listing/:id', component: ListingComponent},
  { path: 'new-application', component: CreateApplicationComponent},
  { path: 'past-applications', component: ViewPastApplicationsComponent},

  { path: 'new-listing', component: NewListingComponent},
  { path: 'past-listings', component: ViewPastListingsComponent},  
  { path: 'new-template', component: NewTemplateComponent},  
  { path: 'review-apps', component: ReviewApplicantsComponent},  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
