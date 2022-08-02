import { NewsService } from '../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news-feed',
  templateUrl: './home-news-feed.component.html',
  styleUrls: ['./home-news-feed.component.scss']
})
export class HomeNewsFeedComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  category:string='top';
  news:any;
  ngOnInit(): void {
    this.getNewsData();
  }

  getNewsData(){
    this.newsService.getData().subscribe((response:any)=>{
      console.log('response from service',response);
      console.log('results',response.results);
      this.news=response['results'].filter((result:any)=> result.category[0]===this.category)
      console.log('filtered news',this.news);
        })
  }
  topClicked(){
    this.category="top";
    this.getNewsData();
  }
  businessClicked(){
    this.category="business";
    this.getNewsData();
  }
  technologyClicked(){
    this.category="technology";
    this.getNewsData();
  }
  entertainmentClicked(){
    this.category="entertainment";
    this.getNewsData();
  }
  scienceClicked(){
    this.category='science';
    this.getNewsData();
  }



}
