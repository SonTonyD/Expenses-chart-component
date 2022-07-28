import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';


@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {

  constructor(private _expenseService : ExpenseService) { }

  expenses!: any[];
  amount: number[] = [0,0,0,0,0,0,0]

  normalizedAmount : number[] = [0,0,0,0,0,0,0]

  valueH : number[] = [0,0,0,0,0,0,0]
  selectedTable : boolean[] = [false,false,false,false,false,false,false]

  previousEvent : any = null;

  ngOnInit(): void {
    this._expenseService.getExpenses().subscribe(
      res => {
        this.expenses = res;
        for (let index = 0; index < 7; index++) {
          this.amount[index] = (res[index].amount) 
        }
        console.log(this.amount)
        var max = Math.max.apply(null, this.amount) + 0.15*(Math.max.apply(null, this.amount))

        for (let index = 0; index < 7; index++) {
          this.normalizedAmount[index] = 200*(1-((this.amount[index]/max)));
        }
        console.log(this.normalizedAmount)

        for (let index = 0; index < 7; index++) {
          this.valueH[index] = 200 - this.normalizedAmount[index];
        }
        console.log(this.valueH);

      },
      err => console.log(err),
    )

    

    console.log(this.normalizedAmount)
  }

  onClick(event: any) {
    if (event.srcElement.tagName == 'rect') {
      console.log(event)

      console.log("object selected")
      event.target.setAttribute("style", "fill:blue;stroke-width:5;opacity:0.5")
      if (this.previousEvent != null && event.target.getAttribute("name") != this.previousEvent.target.getAttribute("name")) {
        this.previousEvent.target.setAttribute("style", "fill:#ec755d;stroke-width:5;opacity:1")
      }

      this.previousEvent = event


    switch (event.target.getAttribute("name")) {
      case"mon" : {this.selectedTable = [true,false,false,false,false,false,false]; break;}
      case"tue" : {this.selectedTable = [false,true,false,false,false,false,false]; break;}
      case"wed" : {this.selectedTable = [false,false,true,false,false,false,false]; break;}
      case"thu" : {this.selectedTable = [false,false,false,true,false,false,false]; break;}
      case"fri" : {this.selectedTable = [false,false,false,false,true,false,false]; break;}
      case"sat" : {this.selectedTable = [false,false,false,false,false,true,false]; break;}
      case"sun" : {this.selectedTable = [false,false,false,false,false,false,true]; break;}
      default : {this.selectedTable = [false,false,false,false,false,false,false]; break;}
    }
        

      console.log(event.target.getAttribute("name"))
      
    }

  }

}
