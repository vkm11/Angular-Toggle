import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toggle';

  hide:boolean = true;
  func(){
    this.hide = !this.hide;
  }

 // OR

//   func(){
//     if(this.hide === false){
//       this.hide =true;
//     }
//     else{
//       this.hide =false
//     }
//   }
}
