import { NewsService } from '../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news-feed',
  templateUrl: './home-news-feed.component.html',
  styleUrls: ['./home-news-feed.component.scss'],
})
export class HomeNewsFeedComponent implements OnInit {
  constructor(private newsService: NewsService) { }

  category: string = 'top';
  news: any=[];
  carouselSlides:any=[];
  
  ngOnInit(): void {
    this.getNewsData();
  }

  getNewsData() {
    this.newsService.getData().subscribe((response: any) => {
      
      if(this.category==="all"){
        this.news=response['results'];
      }
      else{
        this.news = response['results'].filter(
          (result: any) => result.category[0] === this.category
        );
      }
      this.carouselSlides=this.news.slice(0,5);
      
    });
  }

  changeCategory(type: string) {
    this.category = type;
    this.getNewsData();
  }


  isActive(type: string) {
    return this.category === type ? 'active' : 'inactive';
  }
}
