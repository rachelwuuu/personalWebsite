import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { 
    window.addEventListener('mousemove',function(e){
      console.log(e.x);
    })
  }

  ngOnInit(): void {
  }

}
