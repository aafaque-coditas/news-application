import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
{path:'',component:HomePageComponent},
{path:'admin',component:AdminPageComponent, canActivate:[AuthGuard]},
{path:'news/:index', component:NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
