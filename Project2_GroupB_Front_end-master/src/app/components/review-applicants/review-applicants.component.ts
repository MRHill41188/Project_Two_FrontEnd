
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-review-applicants',
    templateUrl: './review-applicants.component.html',
    styleUrls: ['./review-applicants.component.css']
})
export class ReviewApplicantsComponent implements OnInit {

    noneMess: string = "";
    results: any = null;

    constructor(
        private applicationService: ApplicationService,
        private shared: SharedService
    ) { }

    onClick(event, result) {

    };
    ngOnInit() {

        this.applicationService.getApplications(this.shared.reviewAppsListingId).subscribe(data => {
            this.results = data;

            if(this.results == null || this.results.length == 0) {
                this.noneMess = "None";
            }
            else {

                for(let app of this.results) {
                    app.status = this.shared.statusViewed; //set to "application viewed"
                }

                //save new status to DB
                this.applicationService.updateApplicationStatus(this.results).subscribe(data => {

                    const test = 0;
                },
                error => {
                    const test = 0;
                });
            }
        },
        error => {
            const test = 0;
        });
    }
}