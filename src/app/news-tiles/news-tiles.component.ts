import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-tiles',
  templateUrl: './news-tiles.component.html',
  styleUrls: ['./news-tiles.component.scss'],
})
export class NewsTilesComponent implements OnInit {
  @Input() newsList: any;

  constructor() {}

  ngOnInit(): void {}

  categoryColor(category: string) {
    return `current${category}`;
  }
  changeColor(value: string): any {
    switch (value) {
      case 'top':
        return { 'background-color': '#B4F8C8' };
      case 'business':
        return { 'background-color': '#A0E7E5' };
      case 'technology':
        return { 'background-color': '#FFAEBC' };
      case 'entertainment':
        return { 'background-color': '#FBE7C6' };
      case 'science':
        return { 'background-color': '#D2E5D0' };
    }
  }
}
