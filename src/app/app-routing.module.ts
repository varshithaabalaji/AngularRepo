import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActorlistsComponent } from './components/actorlists/actorlists.component';
import { BlogComponent } from './components/blog/blog.component';
import { WeatherdemoComponent } from './components/weatherdemo/weatherdemo.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'actors',component:ActorlistsComponent},
  {path: 'posts',component:BlogComponent},
  {path:'weather',component:WeatherdemoComponent},
  {path: '',pathMatch:'full',component: HomeComponent},
  {path: '**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
