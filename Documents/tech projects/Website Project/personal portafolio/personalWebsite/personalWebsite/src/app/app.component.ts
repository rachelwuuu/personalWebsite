import { Component } from '@angular/core';
import {fromEvent} from 'rxjs';
fromEvent(document.body, 'mousemove').subscribe(e=>{console.log(e);})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personalWebsite';
}
