import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  @Output() toggleEvent = new EventEmitter<boolean>();

  opened = false;
  name: any;
  id: any;  
  length: any;
  bookName: string;
  wishlistLength: number;

  ngOnInit(): void {
  }

}
