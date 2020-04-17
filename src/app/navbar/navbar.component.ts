import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidebar') sidebar: SidebarComponent;

  day = 'today';
  brandName = 'Minimus';
  sidebarIsHidden = true;
  sidebarClasses = 'sidebar--hidden';

  constructor() {}

  ngOnInit(): void {}

  openSidebar() {
    if (this.sidebarIsHidden) {
      this.sidebarClasses = 'sidebar--present';
      this.sidebarIsHidden = false;
      return;
    }

    this.sidebarClasses = 'sidebar--hidden';
    this.sidebarIsHidden = true;
  }
}
