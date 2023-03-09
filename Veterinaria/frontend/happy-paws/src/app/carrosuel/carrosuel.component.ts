import { Component, OnInit } from '@angular/core';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-carrosuel',
  templateUrl: './carrosuel.component.html',
  styleUrls: ['./carrosuel.component.css'],
})
export class CarrosuelComponent implements OnInit {
  public carrosuelSwiper = new Swiper('.mySwiperCarrousel', {
    spaceBetween: 30,
    slidesPerView:1,
    init: false,
    centeredSlides: true,
    modules: [Navigation,Autoplay,Pagination],
    autoplay:{
      pauseOnMouseEnter:true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  constructor() {}
  ngOnInit(): void {}

  ngAfterViewChecked() {
    // @ts-ignore
    this.carrosuelSwiper.init(document.querySelector('.mySwiperCarrousel'));
  }
}