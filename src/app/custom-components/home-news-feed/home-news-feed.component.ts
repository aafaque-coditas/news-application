import { NewsService } from '../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news-feed',
  templateUrl: './home-news-feed.component.html',
  styleUrls: ['./home-news-feed.component.scss']
})
export class HomeNewsFeedComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  category: string = 'top';
  news: any;
  ngOnInit(): void {
    this.getNewsData();
  }

  getNewsData() {
    this.newsService.getData().subscribe((response: any) => {
      console.log('response from service', response);
      console.log('results', response.results);
      this.news = response['results'].filter((result: any) => result.category[0] === this.category)
      console.log('filtered news', this.news);
    })
  }

  categoryClicked(clickedCategory: string) {
    switch (clickedCategory) {
      case 'top': this.category = 'top';
        this.getNewsData();
        break;
      case 'business': this.category = 'business';
        this.getNewsData();
        break;
      case 'entertainment': this.category = 'entertainment';
        this.getNewsData();
        break;
      case 'science': this.category = 'science';
        this.getNewsData();
        break;
      case 'technology': this.category = 'technology';
        this.getNewsData();
        break;

    }
  }


}
