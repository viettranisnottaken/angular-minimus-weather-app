import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _sidebarIsHidden = true;
  _sidebarClasses = '';
  isLoggedIn = true;

  @HostListener('document:keyup.escape', ['true'])
  onEscKeyUp(event: boolean) {
    if (this.sidebarIsHidden) {
      return;
    }

    this.onSidebarTrigger(event);
  }

  onSidebarTrigger(event: boolean) {
    this.sidebarIsHidden = event;
    if (this.sidebarIsHidden) {
      this.sidebarClasses = 'hidden';
    } else {
      this.sidebarClasses = 'present';
    }
  }

  public get sidebarIsHidden(): boolean {
    return this._sidebarIsHidden;
  }

  public set sidebarIsHidden(sidebarIsHidden: boolean) {
    this._sidebarIsHidden = sidebarIsHidden;
  }

  public get sidebarClasses(): string {
    return this._sidebarClasses;
  }

  public set sidebarClasses(sidebarClasses: string) {
    this._sidebarClasses = sidebarClasses;
  }
}
