import { Component, Input, OnInit} from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{name | titlecase}}</h2>
  <h2>{{name | slice:3:6}}</h2>
  <h2>{{person | json}}</h2>
  <h2>{{ 0.024 |percent}}</h2>
  <h2>{{0.25 | currency}}</h2>
   <h2>{{0.25 | currency :'INR'}}</h2>
  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
    <li> {{employee.id}}. {{employee.name}}-{{employee.age}}</li>
</ul>
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {
// @Input()public parentData: any;
//  @Output() public childEvent=new EventEmitter();
 public date=new Date();
 public name="Code Evolution";
 public person={
   "firstName":"john",
   "lastName":"doe"
   }
  
  public employees: { id: number; name: string; age: number; }[] | undefined;
  constructor(private _employeeService:EmployeeService) { 
   
  }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data =>this.employees=data);
  }
  // fireEvent(){
  //   this.childEvent.emit('Hey How are u?');
  // }
}
