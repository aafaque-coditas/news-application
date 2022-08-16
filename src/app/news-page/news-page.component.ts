import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  constructor() { }
  news:any
  ngOnInit(): void {
    let data:any = localStorage.getItem('data');
     this.news = JSON.parse(data);
  }
  setGradient(){
    let styles={
      backgroundImage: `linear-gradient(rgb(0 0 0 / 26%), rgb(0 0 0)), url("${this.news.image_url}")`,
      width: "100vw",
      height:'70vh'
    }
    return styles
  }

}
