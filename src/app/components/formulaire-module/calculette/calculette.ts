import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculette',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculette.html',
  styleUrl: './calculette.css',
})
export class CalculetteComponent {
  a: number | null = null;
  b: number | null = null;
  result: number | null = null;
  error: string | null = null
  operator: string = '';

  /* add() {
    this.result = this.a + this.b;
  }

  subtract() {
    this.result = this.a - this.b;
  }

  multiply() {
    this.result = this.a * this.b;
  }

  divide() {
    if (this.b !== 0) {
      this.result = this.a / this.b;
    } else {
      this.result = 0;
    }
  } */

  calculate(op: string) {
    this.operator = op
    this.result = null
    this.error = null

    if (this.a != null && !isNaN(this.a) && this.b != null && !isNaN(this.b)) {
      switch (op) {
        case '+':
          this.result = this.a + this.b;  
          break;
        case '-':
          this.result = this.a - this.b;
          break;
        case '*':
          this.result = this.a * this.b;
          break;
        case '/':
          if (this.b != 0) {
            this.result = this.a / this.b;
          } else {
            this.error = "Problème de division par zéro"
          }
          break;
      }
    } else {
      this.error = "Les deux champs sont obligatoires"
    }
  }    
}