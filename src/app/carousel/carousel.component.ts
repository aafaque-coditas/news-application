import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void=>*', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1, }),

        )
      ]),
      transition('*=>void', [
        animate('600ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides!: any;
  @Input() carouselSlides!: any;

  category: string = "top";
  constructor() { }

  ngOnInit(): void {
    this.nextSlide();

  }
  currentSlide = 0;

  onPreviousClick() {
    let previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.carouselSlides.length - 1 : previous;
  }

  onNextClick() {
    let next = this.currentSlide + 1;
    this.currentSlide = next === this.carouselSlides.length ? 0 : next;
  }

  nextSlide() {
    let next;
    setInterval(() => {
      next = this.currentSlide + 1;
      this.currentSlide = next === this.carouselSlides.length ? 0 : next;
    }, 4000)
  }

  changeCurrentSlide(slideNum:number){
    this.currentSlide=slideNum;
  }

  setActiveClass(slideNumber:number){
    return this.currentSlide==slideNumber? 'active' : '';
  }


}
