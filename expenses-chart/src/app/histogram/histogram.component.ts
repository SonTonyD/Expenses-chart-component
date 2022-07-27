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

  ngOnInit(): void {
    this._expenseService.getExpenses().subscribe(
      res => {
        this.expenses = res;
        for (let index = 0; index < 7; index++) {
          this.amount[index] = (res[index].amount) 
        }
        console.log(this.amount)
        var max = Math.max.apply(null, this.amount)

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

}
