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
  categoryList:string[]=['All','Top','Business','Technology','Entertainment','Science']
  
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
      if(this.news.length<5){
        this.carouselSlides=this.news.slice(0,this.news.length);
      }
      else{
        this.carouselSlides=this.news.slice(0,5);
      }
      
     
    });
  }

  changeCategory(type: string) {
    this.category = type.toLowerCase();
    this.getNewsData();
  }


  isActive(type: string) {
    return this.category === type.toLowerCase() ? 'active' : 'inactive';
  }
}
