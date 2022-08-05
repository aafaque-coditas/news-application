import { NewsService } from './../../services/news.service';
import { Component,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  searchInput:string='';
  
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {}
  
 searchValue(){
    this.newsService.searchData(this.searchInput)
 }
}
