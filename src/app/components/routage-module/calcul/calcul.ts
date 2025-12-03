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
          this.result = calculer(this.a, this.b, this.operatorSymbol)
        }
      })

  }
}

function calculer(val1: number, val2: number, op: string = '+'): number {
  switch (op) {
    case '+': return val1 + val2;
    case '-': return val1 - val2;
    case '/': return val1 / val2;
    default: return val1 * val2;
  }
}


