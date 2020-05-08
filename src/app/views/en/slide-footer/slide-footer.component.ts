import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-slide-footer',
  templateUrl: './slide-footer.component.html',
  styleUrls: ['./slide-footer.component.css']
})
export class SlideFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var swiper = new Swiper('.swiper-container1', {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
      
        320: {
          slidesPerView: 3,
          spaceBetween: 20
        },
       
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 5,
          spaceBetween: 40
        }
      },

    });

  }

}
