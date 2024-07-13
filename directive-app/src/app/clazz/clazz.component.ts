import { Component } from '@angular/core';

@Component({
  selector: 'app-clazz',
  templateUrl: './clazz.component.html',
  styleUrl: './clazz.component.css'
})
export class ClazzComponent {

      marks : number=20;
      myclass:string="";

      constructor(){
        if(this.marks >=70){
         this.myclass="class-1";
        }
        else{
          this.myclass="class-2";
        }

        }

      }
