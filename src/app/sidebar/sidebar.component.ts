import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [SidebarService],
})
export class SidebarComponent implements OnInit {
  profilePicture: any;
  _activeClass = '';
  _isActiveClassActive = false;

  @Output() linkActivation = new EventEmitter();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.getImageFromServer(
      this.sidebarService.createimageFromBlob
    );

    this.profilePicture = this.sidebarService.profilePicture;
  }

  triggerLinkState() {
    this.isActiveClassActive = !this.isActiveClassActive;
    if (this.isActiveClassActive) {
      this.activeClass = 'active';
    } else {
      this.activeClass = '';
    }
  }

  onLinkActivation(event: boolean) {
    console.log(event);

    this.linkActivation.emit(event);
  }

  public get activeClass(): string {
    return this._activeClass;
  }

  public set activeClass(activeClass: string) {
    this._activeClass = activeClass;
  }

  public get isActiveClassActive(): boolean {
    return this._isActiveClassActive;
  }

  public set isActiveClassActive(isActiveClassActive: boolean) {
    this._isActiveClassActive = isActiveClassActive;
  }
}
