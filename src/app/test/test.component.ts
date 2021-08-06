import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="venky">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="venky">
 <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="venky">
  <!-- <h2>{{2+2}}</h2> 
  <h2>{{"Welcome "+ name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2> -->

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public name="Andreu";
 public myId="testId";
 public isDisabled=true;
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello " +this.name;
  }
}
