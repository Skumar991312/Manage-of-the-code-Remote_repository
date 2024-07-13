import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    username : string ="";
    password : string ="";
    conformPassword : string="";
    gender :string="";
    country :string="";
    msg:string="";

   handleSubmitBtns(){
   
        this.msg="Resistration Success...!";

   }
  }