import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, pipe} from 'rxjs';
import {fromEvent} from 'rxjs';
fromEvent(document.body, 'mousemove').subscribe(($e)=>{
  
  
})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personalWebsite';
}
