import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-calcul',
  imports: [],
  templateUrl: './calcul.html',
  styleUrl: './calcul.css',
})
export class CalculComponent implements OnInit {
  op: string = "";
  a = 0;
  b = 0;
  result = 0;
  operators: Map<string, string> = new Map([
    ['plus', '+'],
    ['moins', '-'],
    ['div', '/'],
    ['fois', '*']
  ])
  erreur: string | null = null;
  operatorSymbol: string | undefined = undefined;

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
    .subscribe(([params, queries]) => {
        this.op = params.get('op') ?? ''
        this.operatorSymbol = this.operators.get(this.op)
        this.a = Number(queries.get('a'))
        this.b = Number(queries.get('b'))
        
        if (isNaN(this.a) || isNaN(this.b)) {
          this.erreur = "Les deux paramètres doivent être de type numérique"
        } else if (!this.operators.has(this.op)) {
          this.erreur = "Opérateur invalide"
        } else {
          this.result = eval(`${this.a} ${this.operatorSymbol} ${this.b}`)
        }
      })

  }

  /* ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.op = params.get('op') ?? ''
      this.operatorSymbol = this.operators.get(this.op)

      this.route.queryParamMap.subscribe(queries => {
        this.a = Number(queries.get('a'))
        this.b = Number(queries.get('b'))

        if (isNaN(this.a) || isNaN(this.b)) {
          this.erreur = "Les deux paramètres doivent être de type numérique"
        } else if (!this.operators.has(this.op)) {
          this.erreur = "Opérateur invalide"
        } else {
          this.result = eval(`${this.a} ${this.operatorSymbol} ${this.b}`)
        }
      })
    }) */
        

      /* switch(this.op) {
        case 'plus':
          this.op = '+';
          this.result = this.a + this.b;
          break;
        case 'moins':
          this.op = '-';
          this.result = this.a - this.b;
          break;
        case 'fois':
          this.op = '*';
          this.result = this.a * this.b;
          break;
        case 'div':
          this.op = '/';
          this.result = this.b !== 0 ? this.a / this.b : 0;
          break;
        default:
          this.result = 0;
      } */
}


