import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 *ngIf="dName; else elseBlock">
    Welcome
  </h2>
  <ng-template #elseBlock>
  <h2>
    Name is hidden
  </h2>
  </ng-template>
  <div *ngFor="let color of colors;index as i">
  <h2> {{i}} {{color}}</h2>    
</div>
   <div *ngIf="dName; then thenBlock; else elseBlock"></div>
 <ng-template #thenBlock>
<h2>This is then block</h2>
 </ng-template>
<ng-template #elseBlock>
<h2>This is else block</h2>
</ng-template>
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You picked red color</div>
  <div *ngSwitchCase="'blue'">You picked blue color</div>
  <div *ngSwitchCase="'green'">You picked green color</div>
<div *ngSwitchDefault>Pick again</div>
  </div>
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {
public colors=["red","green","yellow"];
public dName=false;
public color="red";

  constructor() { }

  ngOnInit(): void {
  }
  
}
