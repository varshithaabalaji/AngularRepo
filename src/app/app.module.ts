import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { ActordataService } from './services/actordata.service';

import { AppComponent } from './app.component';

import { ActorlistsComponent } from './components/actorlists/actorlists.component';
import { MessageComponent } from './components/message/message.component';

import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';
import { BlogService } from './services/blog.service';
import { BlogComponent } from './components/blog/blog.component';
import { WeatherdemoComponent } from './components/weatherdemo/weatherdemo.component';
import { WeatherService } from './services/weather.service';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ActorlistsComponent,
    MessageComponent,
    ObservabledemoComponent,
    BlogComponent,
    WeatherdemoComponent,
    ParentComponent,
    ChildComponent,
    PipedemoComponent,
    ReversetextPipe,
    PiglatinPipe,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ActordataService,
    // ObservableService,
    BlogService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
