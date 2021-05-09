import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import SwiperCore, { Pagination, Navigation, Keyboard, Scrollbar, EffectFade, Zoom, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination, EffectFade, Zoom, Autoplay]);

@Component({
  selector: 'tplu9-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  currentSection;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
