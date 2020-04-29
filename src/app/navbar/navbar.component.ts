import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() hamburgerSidebarActivated = true;

  day = 'today';
  brandName = 'Minimus';
  sidebarClasses = 'sidebar--hidden';

  @Output() sidebarIsHidden = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onHamburgerClick() {
    this.hamburgerSidebarActivated = !this.hamburgerSidebarActivated;
    this.sidebarIsHidden.emit(this.hamburgerSidebarActivated);
  }
}
