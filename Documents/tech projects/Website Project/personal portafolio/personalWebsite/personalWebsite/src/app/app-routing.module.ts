import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'intro', component:IntroComponent},
  {path:'project',component:ProjectComponent},
  {path:'work',component:WorkComponent},
  {path:'navbar',component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
