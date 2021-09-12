import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';
import {NavbarComponent} from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProjectComponent,
    WorkComponent, 
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'intro', component:IntroComponent},
      {path:'project',component:ProjectComponent},
      {path:'work',component:WorkComponent},
      {path:'navbar',component:NavbarComponent}

    ])

  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
