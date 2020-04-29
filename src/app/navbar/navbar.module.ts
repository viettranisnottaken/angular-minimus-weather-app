import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [CommonModule, NavbarRoutingModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
