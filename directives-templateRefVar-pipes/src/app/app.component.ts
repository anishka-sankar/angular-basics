import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-templateRefVar-pipes';
  flag = false;
  arr =[10,20,30,20,13] ;
  value='red';
  two = 'className';
  three ='className1';
}
