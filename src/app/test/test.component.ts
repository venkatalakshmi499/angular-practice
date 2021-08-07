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
 <h2 class="text-special">Angular</h2>
<h2 [class]="successClass">Angular</h2>
<h2 [class.text-danger]="hasError">class binding</h2>
<h2 [ngClass]="messageClasses">Angular</h2>
<h2 [style.color]="'purple'">Style Binding</h2>
<h2 [style.color]="hasError ? 'red' :'green' ">Style Binding</h2>
<h2 [style.color]="highlightColor">Style Binding</h2>
<h2 [ngStyle]="titleStyles">style Binding</h2>
<button (click)="onClick($event)">Greet</button>
{{greeting}}
  <!-- <h2>{{2+2}}</h2> 
  <h2>{{"Welcome "+ name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2> -->

  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {
 public name="Andreu";
 public myId="testId";
 public isDisabled=true;
 public successClass="text-success";
 public hasError=true;
 public isSpecial=true;
 public highlightColor="blue";
 public greeting="";
 public messageClasses={
   "text-success":!this.hasError,
   "text-danger":this.hasError,
   "text-special":this.isSpecial
 }
 public titleStyles={
   color:"yellow",
   fontStyle:"italic"
 }
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello " +this.name;
  }
  onClick(event: any){
    console.log(event);
    this.greeting=event.type;
  }
}
