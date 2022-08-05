import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './custom-components/navbar/navbar.component';
import { HomeNewsFeedComponent } from './custom-components/home-news-feed/home-news-feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsTilesComponent } from './news-tiles/news-tiles.component';
import { HttpClientModule} from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap'
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeNewsFeedComponent,
    CarouselComponent,
    NewsTilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    NgbCarouselModule,
    MatChipsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
