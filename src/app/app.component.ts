import { Component, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adewale';
  slideIndex=0;
   
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    this.slideIndex=this.swiper.swiperRef.activeIndex;
    console.log('slide change',this.swiper.swiperRef.activeIndex);

  }

  slideNext(){
    this.swiper.swiperRef.slideNext(500);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(500);
  }
}
