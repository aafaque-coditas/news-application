import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { MatDialogRef } from "@angular/material/dialog";
import { IUser } from 'src/app/interfaces/types';
@Component({
  selector: 'app-login-dialoguebox',
  templateUrl: './login-dialoguebox.component.html',
  styleUrls: ['./login-dialoguebox.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class LoginDialogueboxComponent implements OnInit {

  constructor(private newsService: NewsService, public dialogRef: MatDialogRef<any>, private router: Router) { }
  email: string = '';
  password: string = '';
  ngOnInit(): void {

  }
 
  userLogin() {
    let loginStatus = this.newsService.userLogin({ email: this.email, password: this.password })
    if (loginStatus) {
      console.log(loginStatus);
      this.dialogRef.close();
      this.router.navigate(['admin']);
    }
    else {
      alert('galat info daali hai bhai');
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
