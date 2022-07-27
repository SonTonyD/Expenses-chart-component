import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit {
  @Input() day!: string;
  @Input() valueY!: number;
  @Input() valueH!: number;
  @Input() value!: number;

  changeText = false;

  constructor() { }


  ngOnInit(): void {
  }

}
