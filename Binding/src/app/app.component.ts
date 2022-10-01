import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  color = 'pink';
  special = "isSpecial";

  display(){
    console.log("Hi");
  }

}


