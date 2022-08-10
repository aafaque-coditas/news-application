import { NewsService } from '../../services/news.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-news-feed',
  templateUrl: './home-news-feed.component.html',
  styleUrls: ['./home-news-feed.component.scss'],
})
export class HomeNewsFeedComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  localData:any;
  category: string = 'all';
  news: any = [];
  carouselSlides: any = [];
  categoryList: string[] = ['All', 'Top', 'Business', 'Technology', 'Entertainment', 'Science']

  ngOnInit(): void {
    localStorage.setItem('category', 'top');
    this.newsService.filteredNews$.subscribe((response)=>{
      console.log('response in subscribe',response);
        this.news=response;
    })
    this.getNewsData();
    
  }

  getNewsData() {
    this.localData=localStorage.getItem('localData') || '';
    this.localData=JSON.parse(this.localData);
    console.log('results loading',this.localData);
    
      if (this.category === "all") {
        console.log('locale data',this.localData.results);
        this.news = this.localData.results;
        console.log('news',this.news);
      }
      else {
        this.news = this.localData.results.filter(
          (result: any) => result.category[0] === this.category || result.category===this.category);
        console.log('news after filtering',this.news);
      }
      if (this.news.length < 5) {
        this.carouselSlides = this.news.slice(0, this.news.length);
      }
      else {
        this.carouselSlides = this.news.slice(0, 5);
      }
    
  }

  changeCategory(type: string) {
    this.category = type.toLowerCase();
    localStorage.setItem('category', this.category);
    this.getNewsData();
  }

  isActive(type: string) {
    return this.category === type.toLowerCase() ? `active${type}` : 'inactive';
  }
 
}
