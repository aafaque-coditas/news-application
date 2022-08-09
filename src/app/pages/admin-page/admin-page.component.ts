import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private newsService:NewsService,public fb:FormBuilder) { }

  newsForm!:FormGroup;

  ngOnInit(): void { 
    this.initializeForm();
  }

  initializeForm(){
    this.newsForm=this.fb.group({
      title:new FormControl(''),
      link:new FormControl(''),
      keywords:new FormControl(''),
      creator:new FormControl(''),
      video_url:new FormControl(''),
      description:new FormControl(''),
      content:new FormControl(''),
      pub_Date:new FormControl(''),
      full_description:new FormControl(''),
      image_url:new FormControl(''),
      source_id:new FormControl(''),
      country:new FormControl(''),
      category:new FormControl(''),
      language:new FormControl(''),
    })
  }

  submitNewsForm(formValue:any){
    console.log('form value',formValue.value);
      this.newsService.addNews(formValue.value);
  }

}
