import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public canvas: any;
  public ctx: any;
  public dataCases: any;
  public labels: any = ['Course Projects','Hackathon Projects','Work Projects','Other'];
  constructor() {  }

  ngOnInit(): void {
    this.createLineChart(this.labels, 'myChart');
  }
  private createLineChart(labels: any, chartId: any){
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let chart = new Chart(this.ctx, {
      type:'pie', 
      data:{
        labels: this.labels,
        datasets: [{
          data:[6,4,3,2],
          backgroundColor:['rgb(240, 183, 226)','rgb(250, 210, 173)','rgb(198, 245, 191)','rgb(197, 240, 253)'],
        }]
      },
      options:{
        title:{
          display: true,
          text:"Rachel's Project Distribution Data",
          fontColor: 'white'
        },
        legend:{
          labels:{
            fontColor: 'white'
          }
        },
        tooltips:{
          mode:'index',
          intersect:true
        }
      }
    });
  }
}
