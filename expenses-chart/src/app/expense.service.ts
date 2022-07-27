import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http : HttpClient) { }

  private expenses_url = "/assets/data.json"

  getExpenses() {
    return this.http.get<any[]>(this.expenses_url);
  }
}
