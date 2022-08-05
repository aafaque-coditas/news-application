import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  category!: string;
  date!: any;
  searchInput!: any;
  todaysDate!: string;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.date = new Date();
    this.todaysDate = this.date.toDateString();
  }
  searchValue() {
    this.newsService.searchData(this.searchInput);
  }
}
