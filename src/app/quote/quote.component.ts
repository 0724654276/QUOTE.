import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'George Kamakia', '"Experience is the name everyone gives to their mistakes."', 'Oscar Wilde', new Date(2021,10,11)),
    new Quote(2,'Esther Wangui','"Java is to Jvascript what car is to carpet."', 'Chris Heilmann', new Date(2021,10,4)),
    new Quote(3, 'Ruth Wambui', '"Ruby is rubbish!PHP is phpantastic."', 'Nikita Popov', new Date(2021,10,5)),

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