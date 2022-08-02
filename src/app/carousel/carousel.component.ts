
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void=>*', [
        style({ opacity: 0}),
        animate('300ms', style({ opacity: 1,}),
        
        )
      ]),
      transition('*=>void', [
        animate('300ms', style({ opacity: 0}))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides: any;
  constructor() { }

  ngOnInit(): void { }

  currentSlide = 0;

  onPreviousClick() {
    let previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    let next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}


trigger('carouselAnimation', [
  transition('void=>*', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1, transform: 'translateX(200%)' }),
    )
  ]),
  transition('*=>void', [
    animate('300ms', style({ opacity: 0, transform: 'translateX(0%)' }))
  ])
])