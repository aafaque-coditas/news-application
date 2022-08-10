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

  categoryList:any=['top','science','business','entertainment','technology'];

  formFields:any=['title','link','keywords','creator','video_url','description','content',
  'pub_Date','full_description','image_url','source_id','country','category','language'];

  ngOnInit(): void { 
    
    this.setValue();
  }

    newsForm=new FormGroup({
      title:new FormControl(),
      link:new FormControl(),
      keywords:new FormControl(),
      creator:new FormControl(),
      video_url:new FormControl(),
      description:new FormControl(),
      content:new FormControl(),
      pub_Date:new FormControl(),
      full_description:new FormControl(),
      image_url:new FormControl(),
      source_id:new FormControl(),
      country:new FormControl(),
      category:new FormControl(),
      language:new FormControl(),
    })
  

  submitNewsForm(formValue:any){
    console.log('form value',formValue.value);
    this.newsService.addNews(formValue.value);
    this.router.navigate(['']);
  }

  setValue(){
    let news={
      title:'',
      link:'',
      keywords:'',
      creator:'',
      video_url:'',
      description:'',
      content:'',
      pub_Date:'2022-08-09',
      full_description:'',
      image_url:'',
      source_id:'',
      country:[],
      category:'top',
      language:''
    }
    this.newsForm.get('category')?.setValue(news['category']);
    this.newsForm.setValue(news);
  }
}
