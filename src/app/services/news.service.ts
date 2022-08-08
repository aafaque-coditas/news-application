import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  searchBarValue: string = '';
  keywordMatch:any=[];
  newsCollection:any;

  private filteredNews = new Subject<any>();
 filteredNews$ = this.filteredNews.asObservable();

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('../../assets/dummy-news.json');
  }

  searchData(valueToBeSearched: string) {
    this.keywordMatch=[];
    this.httpClient.get('../../assets/dummy-news.json').subscribe((response: any) => {
      let currentCategory = localStorage.getItem('category');
      response.results.map((news: any) => {
        if (news.category[0] == currentCategory || currentCategory=='all') {
          if (news.keywords != null) {    
            news.keywords.map((keyword:string)=>{      
              if(valueToBeSearched.toLowerCase()==keyword.toLowerCase()){ this.keywordMatch.push(news);
              console.log('newsmatch');}
            })
          }
        }
      })
      console.log('keyword matches',this.keywordMatch);  
    })
    this.filteredNews.next(this.keywordMatch);
  }

  searchBarData() {
    console.log('search bar data', this.searchBarValue);
    this.filteredNews.next(this.searchBarValue);
  }

  addNews(newsValue:any){
    console.log('service wali value',newsValue);
    this.httpClient.get('../../assets/dummy-news.json').subscribe((response:any)=>{
      console.log(response);
      this.newsCollection=response;
      this.newsCollection.results.push(newsValue);
      console.log('updated array of news',this.newsCollection);
      
    })
  }


}
