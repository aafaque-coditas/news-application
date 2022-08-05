import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-tiles',
  templateUrl: './news-tiles.component.html',
  styleUrls: ['./news-tiles.component.scss']
})
export class NewsTilesComponent implements OnInit {

  @Input() newsList:any;

  constructor(private newService:NewsService) { }

  ngOnInit(): void {
    console.log('news-list ngOnInit')
    this.newService.eventCallback$.subscribe((data: any)=>{
      console.log('bro',data)
      this.newsList=data
    })
  }
  
}
