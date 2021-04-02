import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html', 
  styleUrls: ['./child.component.scss'],
 
})
export class ChildComponent implements OnInit {
@Input() public parentData:any;
@Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
