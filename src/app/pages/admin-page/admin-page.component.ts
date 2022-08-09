import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private newsService:NewsService,public fb:FormBuilder,private router:Router) { }

  newsForm!:FormGroup;
  categoryList:any=['top','science','business','entertainment','technology'];

  ngOnInit(): void { 
    this.initializeForm();
  }

  initializeForm(){
    this.newsForm=this.fb.group({
      title:new FormControl('',Validators.required),
      link:new FormControl('',Validators.required),
      keywords:new FormControl('',Validators.required),
      creator:new FormControl('',Validators.required),
      video_url:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      content:new FormControl('',Validators.required),
      pub_Date:new FormControl('2022-08-09'),
      full_description:new FormControl('',Validators.required),
      image_url:new FormControl('',Validators.required),
      source_id:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required),
      language:new FormControl('',Validators.required),
    })
  }

  submitNewsForm(formValue:any){
    console.log('form value',formValue.value);
    this.newsService.addNews(formValue.value);
    this.router.navigate(['']);
      
  }

}
