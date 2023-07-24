import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display: string = '0';
  currentInput: string = '0';
  operator: string = '';
  memory: number = 0;

  appendNumber(number: number) {
    if (this.currentInput === '0') {
      this.currentInput = number.toString();
    } else {
      this.currentInput += number.toString();
    }
  }

  addOperator(operator: string) {
    this.operator = operator;
    this.memory = parseFloat(this.currentInput);
    this.currentInput = '0';
  }

  calculate() {
    const num = parseFloat(this.currentInput);
    switch (this.operator) {
      case '+':
        this.currentInput = (this.memory + num).toString();
        break;
      case '-':
        this.currentInput = (this.memory - num).toString();
        break;
      case '*':
        this.currentInput = (this.memory * num).toString();
        break;
      case '/':
        this.currentInput = (this.memory / num).toString();
        break;
    }
    this.operator = '';
  }

  calculateSquareRoot() {
    const num = parseFloat(this.currentInput);
    this.currentInput = Math.sqrt(num).toString();
  }

  calculateSin() {
    const num = parseFloat(this.currentInput);
    this.currentInput = Math.sin(num).toString();
  }

  calculateCos() {
    const num = parseFloat(this.currentInput);
    this.currentInput = Math.cos(num).toString();
  }

  // Add other trigonometric function implementations
  // You can refer to Math library for more functions

  clear() {
    this.currentInput = '0';
    this.operator = '';
    this.memory = 0;
  }

}
