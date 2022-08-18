import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  
  constructor(private newsService: NewsService, public fb: FormBuilder, private router: Router) { }

  categoryList: any = ['top', 'science', 'business', 'entertainment', 'technology'];

  formFields: any = ['title', 'link', 'keywords', 'creator', 'video_url', 'description', 'content',
    'pub_Date', 'full_description', 'image_url', 'source_id', 'country', 'category', 'language'];

  ngOnInit(): void {

    this.setValue();
  }

  newsForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
    keywords: new FormControl('', [Validators.required]),
    creator: new FormControl('', [Validators.required]),
    video_url: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    pub_Date: new FormControl('', [Validators.required]),
    full_description: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [Validators.required]),
    source_id: new FormControl('', [Validators.required]),
    country: new FormControl([], [Validators.required]),
    category: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
  })


  submitNewsForm(formValue: any) {
    
    this.newsService.addNews(formValue.value);
    this.router.navigate(['']);
  }

  setValue() {
    let news = {
      title: '',
      link: '',
      keywords: '',
      creator: '',
      video_url: '',
      description: '',
      content: '',
      pub_Date: '2022-08-09',
      full_description: '',
      image_url: '',
      source_id: '',
      country: [],
      category: 'top',
      language: ''
    }
    this.newsForm.get('category')?.setValue(news['category']);
    this.newsForm.setValue(news);
  }
  reset(){
    this.newsForm.reset();
  }
}
