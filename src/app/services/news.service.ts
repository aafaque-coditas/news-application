import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  searchBarValue: string = '';
  keywordMatch: any = [];
  newsCollection: any = '';
  adminEmail = 'admin@news.com';
  adminPassword = '12345678'

  private filteredNews = new Subject<any>();
  filteredNews$ = this.filteredNews.asObservable();

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('localData')) {
      this.newsCollection = localStorage.getItem('localData');
    }
    else {
      this.httpClient.get('../../assets/dummy-news.json').subscribe((response: any) => {
        this.newsCollection = response;
        for (let index = 0; index < this.newsCollection.results.length; index++) {
          this.newsCollection.results[index].index = index + 1;
        }
        localStorage.setItem('localData', JSON.stringify(this.newsCollection));
      })
    }


  }

  getData(): Observable<any> {
    this.newsCollection = JSON.parse(localStorage.getItem('localData') || '');
    return this.newsCollection;
  }

  searchData(valueToBeSearched: string) {
    console.log(valueToBeSearched)
    this.keywordMatch = [];
    let currentCategory = localStorage.getItem('category');
    let completeData = localStorage.getItem('localData') || '';
    let data = JSON.parse(completeData);
    data.results.map((news: any) => {
      if (news.category[0] == currentCategory || currentCategory == 'all') {
        if (news.keywords != null) {
          news.keywords.map((keyword: string) => {
            if (valueToBeSearched.toLowerCase() == keyword.toLowerCase()) {
              this.keywordMatch.push(news);
            }
          });
        }
        if (news.title.toLowerCase().includes(valueToBeSearched.toLowerCase())) {
          this.keywordMatch.push(news);
        }
      }
    });

    this.filteredNews.next(this.keywordMatch);
  }

  searchBarData() {
    this.filteredNews.next(this.searchBarValue);
  }


  addNews(newsValue: any): boolean {
    console.log('service wali value', newsValue);
    this.httpClient.get('../../assets/dummy-news.json').subscribe((response: any) => {
      this.newsCollection = response;
      this.newsCollection.results.push(newsValue);
      localStorage.setItem('localData', JSON.stringify(this.newsCollection));

      return true;
    })
    return false;
  }

  userLogin(loginCredentials: any) {
    console.log('logged in using', loginCredentials);
    if (
      loginCredentials.email === this.adminEmail &&
      loginCredentials.password === this.adminPassword
    ) {
      localStorage.setItem('adminToken', '0987654321');
      return true;
    } else {
      return false;
    }
  }

}
