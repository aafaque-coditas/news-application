import { adminDetails } from './../../assets/loginDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  searchBarValue: string = '';
  keywordMatch:any=[];
  newsCollection:any;
  adminEmail='admin@news.com';
  adminPassword='12345678'

  private filteredNews = new Subject<any>();
 filteredNews$ = this.filteredNews.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.newsCollection= this.httpClient.get('../../assets/dummy-news.json');
  }

  getData(): Observable<any> {
    return this.newsCollection;
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
              console.log('category matched');}
            })
          }
         if(news.title.includes(valueToBeSearched)){
          this.keywordMatch.push(news);
          console.log('title matched')
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


  addNews(newsValue:any):boolean{
    console.log('service wali value',newsValue);
    this.httpClient.get('../../assets/dummy-news.json').subscribe((response:any)=>{
      console.log(response);
      this.newsCollection=response;
      this.newsCollection.results.push(newsValue);
      console.log('updated array of news',this.newsCollection);
      return true;
    })
    return false;
  }

  userLogin(loginCredentials:any){
    console.log('logged in using',loginCredentials);
    if(loginCredentials.email==this.adminEmail && loginCredentials.password==this.adminPassword)
    { 
      localStorage.setItem('adminToken','0987654321');
      return true;
    }
    else{ 
      return false;
    }
  }

}
