import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityAdditionComponent } from './city-addition.component';
import { CitySearchComponent } from './child-components/city-search/city-search.component';
import { CityFollowComponent } from './child-components/city-follow/city-follow.component';

@NgModule({
  declarations: [
    CityAdditionComponent,
    CitySearchComponent,
    CityFollowComponent,
  ],
  imports: [CommonModule],
})
export class CityAdditionModule {}
