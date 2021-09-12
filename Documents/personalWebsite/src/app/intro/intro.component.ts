import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private title:Title) { 
    window.addEventListener('mousemove',function(e){
      console.log(e.x);
    })
  }
  
  ngOnInit(): void {
    this.title.setTitle('Rachel Wu | Introduction');
  }

}
