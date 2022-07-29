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
  @Input() selected!: boolean;

  changeText = false;

  color = "#ec755d"

  constructor() { }


  ngOnInit(): void {
  }

  hover(event: any) {
    if (this.selected == false) {
      event.target.setAttribute("style", "fill:#ec755d;stroke-width:5;opacity:0.5")
    }

    
  }

  hoverOut(event: any) {
    if (this.selected == false) {
      event.target.setAttribute("style", "fill:#ec755d;stroke-width:5;opacity:1")
    }
    
  }
  


}
