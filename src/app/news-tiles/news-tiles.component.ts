import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-tiles',
  templateUrl: './news-tiles.component.html',
  styleUrls: ['./news-tiles.component.scss']
})
export class NewsTilesComponent implements OnInit {

  @Input() newsList:any;

  constructor() { }

  ngOnInit(): void {
  }

  categoryColor(category:string){
    return `current${category}`;
  }

}
