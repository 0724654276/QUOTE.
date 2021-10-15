import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'Any fool can write code that a computer can understand. Good programmers write code that humans can understand', 'Martin Fowler'),
    new Quote(2,'First, solve the problem. Then, write the code, 'John Johnson'),
    new Quote(3,'Ruby is rubbish! PHP is phpantastic!', 'Nikita Popov'),
    new Quote(4,'Code is like humor. When you have to explain it, it’s bad.', 'Cory House', 
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
