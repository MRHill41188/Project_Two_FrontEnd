import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/services/template.service';
import { Template } from 'src/app/models/template';
import { TemplateQuestion } from 'src/app/models/template-question';
import { SharedService } from '../../services/shared.service';
import { Listing } from '../../models/listing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit {

  newQuestion: string = '';
  questions: string[] = [];

  constructor(
    private router: Router,
    private shared: SharedService,
    private templateService: TemplateService) { }

  ngOnInit() {
  }

  onAskQuestion() {

    //if not empty
    this.newQuestion = this.newQuestion.trim();
    if(this.newQuestion) {

      //save question
      this.questions.push(this.newQuestion);

      //reset
      this.newQuestion="";
    }
  }

  onDone() {

    //copy questions to template

    let template: Template = new Template();

    for(let question of this.questions) {

      let q = question.trim();
      if(q) {
        let tq: TemplateQuestion = new TemplateQuestion();
        tq.question = q;

        template.questions.push(tq);
      }
    }

    //if not empty
    this.newQuestion = this.newQuestion.trim();
    if(this.newQuestion) {

      let tq: TemplateQuestion = new TemplateQuestion();
      tq.question = this.newQuestion;

      //save question
      template.questions.push(tq);
    }

    //must pass listing
    template.listing = new Listing();
    template.listing.id = this.shared.newTemplateId;

    //do post call
    this.templateService.createTemplate(template).subscribe( (data: any)=> {
    
      this.router.navigate(['past-listings']);
    },
    error => {
      const test = 0;
    });
  }
}
