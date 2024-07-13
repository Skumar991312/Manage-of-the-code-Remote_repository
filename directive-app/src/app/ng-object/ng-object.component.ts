import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-ng-object',
  templateUrl: './ng-object.component.html',
  styleUrl: './ng-object.component.css'
})
export class NgObjectComponent implements OnInit {

   emps:Employee[]=[
     
    new Employee (101, "ram", 2000),
    new Employee (102,"mohan",10000),
    new Employee (103,"krishana", 30000)
];
ngOnInit(): void {
    
  }
}
