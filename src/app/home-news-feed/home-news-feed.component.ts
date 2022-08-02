import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news-feed',
  templateUrl: './home-news-feed.component.html',
  styleUrls: ['./home-news-feed.component.scss']
})
export class HomeNewsFeedComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  news:any;
  ngOnInit(): void {
    this.newsService.getData().subscribe((response:any)=>{
      console.log('response from service',response);
      console.log('results',response.results);
      this.news=response.results;
        })
  }


}
