import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() goal: Quote=new Quote(0,'','','', new Date());
  @Output() isComplete = new EventEmitter<boolean>();
  numberOfLikes : number=(0);

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButton() {
    this.numberOfLikes--;
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit(): void {
  }

}