
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void=>*', [
        style({ opacity: 0}),
        animate('600ms', style({ opacity: 1,}),
        
        )
      ]),
      transition('*=>void', [
        animate('600ms', style({ opacity: 0}))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() slides!: any;
  category:string="top";
  constructor(private newsService:NewsService) { }

  ngOnInit(): void { 
    this.newsService.getData().subscribe((res)=>{
      console.log(res)
      this.slides = res['results'].filter((result:any)=> result.category[0]===this.category);
      this.nextSlide();
    })
    
  }
  currentSlide = 0;

  onPreviousClick() {
    let previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    let next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
  
  nextSlide(){
    let next;
    console.log(this.slides.length)
      setInterval(()=>{
        console.log(1)
         next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
      },4000)
    
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


function onNextClick() {
  throw new Error('Function not implemented.');
}

