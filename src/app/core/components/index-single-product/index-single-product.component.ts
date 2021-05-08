import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'tplu9-index-single-product',
  templateUrl: './index-single-product.component.html',
  styleUrls: ['./index-single-product.component.css']
})
export class IndexSingleProductComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: true,
    pagination: true
  };

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
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: false
  };

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }
  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  ngOnInit(): void {
  }

}
