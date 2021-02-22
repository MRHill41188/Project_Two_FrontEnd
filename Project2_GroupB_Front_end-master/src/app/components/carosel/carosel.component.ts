import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {

  images: string[];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  constructor() { }

  ngOnInit() {
    //   this.images = ['/assets/images/Carosel_FrontPage/1.jpg', '/assets/images/Carosel_FrontPage/2.jpg'
    //   , '/assets/images/Carosel_FrontPage/3.jpg', '/assets/images/Carosel_FrontPage/4.jpg'
    // , '/assets/images/Carosel_FrontPage/5.jpg', '/assets/images/Carosel_FrontPage/6.jpg',
    // '/assets/images/Carosel_FrontPage/7.jpg'];

    this.images = [
      "/assets/images/Carosel_FrontPage/login1b.jpg",
      "/assets/images/Carosel_FrontPage/login2b.jpg",
      "/assets/images/Carosel_FrontPage/login3b.jpg",
      "/assets/images/Carosel_FrontPage/login4b.jpg",
    ];
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}