import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  category!: string;
  
  constructor() { }

  ngOnInit(): void {
  }
  topClicked(){
    this.category="top"
  }
  businessClicked(){
    this.category="business"
  }
  technologyClicked(){
    this.category="technology"
  }
  entertainmentClicked(){
    this.category="entertainment"
  }
  scienceClicked(){
    this.category='science'
  }

}
