import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { MatDialogRef} from "@angular/material/dialog";
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

  constructor(private newService:NewsService, public dialogRef: MatDialogRef<any>) { }
  email:string='';
  password:string='';
  ngOnInit(): void {

  }
  closeDialogBox(){
    // return this.newService.setDialogBox()
  }
  userLogin(){
    console.log('email',this.email)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
