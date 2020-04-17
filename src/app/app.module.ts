import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CityAdditionModule } from './city-addition/city-addition.module';
import { CredentialModule } from './credential/credential.module';
import { CityShowModule } from './city-show/city-show.module';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { CardComponent } from './card/card.component';
import { CityIndexComponent } from './city-index/city-index.component';
import { CityShowComponent } from './city-show/city-show.component';
import { CredentialComponent } from './credential/credential.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CityIndexComponent,
    CityShowComponent,
    CredentialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    CityAdditionModule,
    CredentialModule,
    CityShowModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
