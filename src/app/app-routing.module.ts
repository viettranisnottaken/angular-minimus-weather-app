import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityIndexComponent } from './city-index/city-index.component';
import { CityShowComponent } from './city-show/city-show.component';
import { CityAdditionComponent } from './city-addition/city-addition.component';
import { SignupComponent } from './credential/signup/signup.component';
import { LoginComponent } from './credential/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: CityIndexComponent,
  },

  {
    path: 'details',
    component: CityShowComponent,
  },

  {
    path: 'add',
    component: CityAdditionComponent,
  },

  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
