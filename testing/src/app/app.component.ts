import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name : string="John";
  age : number=25;
 
  handleSubmitBtn(){

   this.name="Ram";
   this.age=30;
 }

}
