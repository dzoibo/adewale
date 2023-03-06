import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Article } from './model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '100vw',
        opacity: 1,
      })),
      state('closed', style({
        with: '0px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.5s ease-in')
      ]),
      transition('closed => open', [
        animate('0.5s ease-in')
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('scrollBottom') private scrollBottom!: ElementRef;
  
  title = 'adewale';
  slideIndex=0;
  articleAdded: number[]=[];
  showSearchbar!: boolean;
  articles: Article[]=[{
      id:1 ,
      name: 'Chemise nago',
      price: 12000,
      image: '../assets/images/card4.png',
    },
    {
      id: 2,
      name: 'complet Ade',
      price: 24500,
      image: '../assets/images/card2.png'
    },
    {
      id:3,
      name: 'Robe Keita',
      price: 17900,
      image: '../assets/images/card6.jpg'
    },
    {
      id:4,
      name:'Complet WS',
      price: 33000,
      image:'../assets/images/card3.png'
    },
    {
      id:5,
      name:'Complet WS',
      price: 33000,
      image:'../assets/images/card8.jpg'
    },
    {
      id:8,
      name:'Complet WS',
      price: 33000,
      image:'../assets/images/card5.jpg'
    },
  ];
  config!: SwiperOptions;
  fashionConfig!: SwiperOptions;
  menuIsDisplayed=false;


  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  getSildePreview(){
    if(window.innerWidth>1200){
      this.config.slidesPerView= 3;
    }else if(window.innerWidth>750 ){
      this.config.slidesPerView= 2;
    }else{
      this.config.slidesPerView= 1;
    }
    console.log(this.config,'resize screen');

  }
  ngOnInit(): void {
    this.showSearchbar=false;
    this.config= {
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
    };
    this.fashionConfig= {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
    };
    this.getSildePreview();
  }

  
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
  scrollAll(){
    console.log('scroll to end');
    window.scrollTo(0, document.body.scrollHeight);
  }

  displayHideSeachBar(){
    this.showSearchbar=!this.showSearchbar;
    setTimeout(() => {
      if(this.showSearchbar===true){
      document.getElementById('searchBar')?.focus();
      console.log(document.getElementById('searchBar'));
    }
    }, 500);
  }

  addArticle(id: number){
    this.articleAdded.push(id);
    window.scrollTo(0, -document.body.scrollHeight);
  }

  showMenu(){
    this.menuIsDisplayed=!this.menuIsDisplayed;
    console.log(this.menuIsDisplayed, 'menu is displayed');
  }
}
