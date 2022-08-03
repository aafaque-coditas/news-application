import { NewsService } from '../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news-feed',
  templateUrl: './home-news-feed.component.html',
  styleUrls: ['./home-news-feed.component.scss'],
})
export class HomeNewsFeedComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  category: string = 'top';
  news: any;
  ngOnInit(): void {
    this.getNewsData();
  }

  getNewsData() {
    this.newsService.getData().subscribe((response: any) => {
      console.log('response from service', response);
      console.log('results', response.results);
      this.news = response['results'].filter(
        (result: any) => result.category[0] === this.category
      );
      console.log('filtered news', this.news);
    });
  }
  changeCategory(type: string) {
    this.category = type;
    this.getNewsData();
  }
  isActive(type:string){
    return this.category===type ? 'active':'inactive';
  }
}
