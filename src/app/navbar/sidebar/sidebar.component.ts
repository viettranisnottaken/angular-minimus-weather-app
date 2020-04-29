import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  [x: string]: any;
  constructor(public el: ElementRef) {}

  ngOnInit(): void {}

  openSidebar(event) {
    console.log('triggered in sidebar: ', event);
  }
}
