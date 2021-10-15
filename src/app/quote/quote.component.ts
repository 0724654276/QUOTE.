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
    new Quote(2,'First, solve the problem. Then, write the code', 'John Johnson'),
    new Quote(3,'Ruby is rubbish! PHP is phpantastic!', 'Nikita Popov'),
    new Quote(4,'Code is like humor. When you have to explain it, it’s bad.','Cory House', 
  ]
  toggleDetails(index: number) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
 
  }

  addUpvote(index: number) {
    this.quotes[index].upVote += 1
  }

  addDownvote(index: number) {
    this.quotes[index].downVote += 1
  }

  get sortByLikes()
  {
     return this.quotes.sort((q1, q2) => {
      return q2.upVote - q1.upVote;
    })
  } 

  quoteDelete(isDeleteQuote: boolean, index: number) {
    if (isDeleteQuote) {
      let toDelete = confirm(`This will remove ${this.quotes[index].publisher}'s quote. Proceed?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}



  constructor() { }

  ngOnInit(): void {
  }

}
