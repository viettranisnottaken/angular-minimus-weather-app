import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityDetailsComponent } from "./city-details/city-details.component";
import { TwitterApiComponent } from "./twitter-api/twitter-api.component";

@NgModule({
  declarations: [CityDetailsComponent, TwitterApiComponent],
  imports: [CommonModule],
})
export class CityShowModule {}
