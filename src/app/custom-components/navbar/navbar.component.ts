import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { LoginDialogueboxComponent } from '../login-dialoguebox/login-dialoguebox.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';
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
  name:string='';
  password:string='';
  needsToLogin:boolean=true;

  constructor(private newsService: NewsService, 
    public dialog: NgDialogAnimationService,private router:Router){}

  ngOnInit(): void {
    this.date = new Date();
    this.todaysDate = this.date.toDateString();
    if(localStorage.getItem('adminToken')){
      this.needsToLogin=false;
    }
  }

    searchValue() {
      if(this.router.url!='/'){
        this.router.navigate(['/']);
      }
    this.newsService.searchData(this.searchInput);
  }

  openDialog(){
    const dialogRef=this.dialog.open(LoginDialogueboxComponent, {
      width: "50%",
      height: "100%",      
      animation: { to: "left" },
      position: { rowStart:"0"}
    })
  }

  onLogoClick(){
    this.router.navigate(['']);
  }

  onAddNewsClick(){
    this.router.navigate(['admin']);
  }

  onLogoutClick(){
    this.needsToLogin=true;
    alert('Logged out!');
    localStorage.removeItem('adminToken');
  }
}

