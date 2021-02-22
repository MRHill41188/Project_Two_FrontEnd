import { Component, OnInit, Sanitizer } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../services/shared.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ListingService } from '../../services/listing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ListingComponent implements OnInit {
  [x: string]: any;

  constructor(
    private listingService: ListingService,
    config: NgbCarouselConfig,
    private shared: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: Sanitizer
  ) {

    // customize default values of carousels used by this component tree
    config.interval = 0; //setting the interval seems to refresh the page which restarts any videos playing. so do not set > 0
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  id: any;
  result: any;

  ngOnInit() {

    //get the route parameter
    this.id = this.route.snapshot.paramMap.get("id");

    this.listingService.getListing(this.id).subscribe(data => {
      this.result = data;
    },
      error => {
        const test = 0;
      });
  }

  onAdoptClicked(event) {

    //use service to shared id with new application page
    this.shared.createAppListingId = this.id;
    this.router.navigate(['new-application']);
  }
}