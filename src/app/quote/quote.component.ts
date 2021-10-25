import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Makori Naph', '"Life is what happens when you’re busy making other plans."', 'John Lenon', new Date(2021,3,4)),
    new Quote(2,'Rono Shalin','"Happiness is when what you think, what you say and what you do are in harmony."', 'Thomas A. Edison', new Date(2021,1,4)),
    new Quote(3, 'Calvin Mutai', '"Be kind whenever possible."', 'George Sand', new Date(2021,3,4)),

  ];

  addNewQuote(quote:any){
    console.log(quote)
    let quoteLength = this.quotes.length;
    // quoteLength.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  displayInfo(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }
  ngOnInit(): void {}

}