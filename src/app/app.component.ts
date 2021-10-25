import { Component } from '@angular/core';
import { Quote } from "./quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote';
  quotes: Quote[] = [
    new Quote(1, 'Naphtali', 'Coding a day, keeps the doctor','Mahatma Ghandi', new Date(2019,3,4)),
    new Quote(2,'Natasha Wachira','Eat anything because our bodies we will leave them on earth', 'Tash', new Date(2019,1,4)),

  ]
}
