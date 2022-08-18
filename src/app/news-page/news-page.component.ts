import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  news:any;
  currentId:number=0;
  relatedNews:any=[];
  
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.currentId=this.activatedRoute.snapshot.params['index'];
    console.log(this.currentId);
    this.getData();
    this.getRelatedNews(); 
  }

  getData(){
   let completeData=localStorage.getItem('localData')|| '';
    let data=JSON.parse(completeData);
    console.log(data.results[this.currentId-1]);
    this.news=data.results[this.currentId-1];
  }

  setGradient(){
    let styles={
      backgroundImage: `linear-gradient(rgb(0 0 0 / 26%), rgb(0 0 0)), url("${this.news.image_url}")`,
      width: "100%",
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      objectFit:'contain',
      height:'70vh'
    }
    return styles
  }

  getRelatedNews() {
    let currentCategory = localStorage.getItem('category') || '';
    let localData = JSON.parse(localStorage.getItem('localData') || '');
    if (localData) {
      localData.results.map((news: any) => {
        if (news.category[0] == currentCategory && news.title!=this.news.title) {
          this.relatedNews.push(news);
        }
      })
      this.relatedNews=this.relatedNews.slice(0,3);
  }
}

  openRelated(data:any){
    this.currentId=data.index;
    this.getData();
    this.router.navigate(['/news',data.index]);
    window.scrollTo(0,0);
  }
}
