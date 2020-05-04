import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  profilePicture: any;
  isImageLoading: boolean;
  _activeClass = '';
  _isActiveClassActive = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.getImageFromServer();
  }

  triggerLinkState() {
    this.isActiveClassActive = !this.isActiveClassActive;
    if (this.isActiveClassActive) {
      this.activeClass = 'active';
    } else {
      this.activeClass = '';
    }
  }

  private getImageFromServer(): void {
    this.isImageLoading = true;
    this.sidebarService.getProfilePicture().subscribe(
      (data) => {
        this.createimageFromBlob(data);
        this.isImageLoading = false;
      },
      (error) => {
        this.isImageLoading = false;
      }
    );
  }

  private createimageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.profilePicture = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
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
