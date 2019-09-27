import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";

import { SliderComponent } from "../components/slider/slider.component";
import { TileComponent } from "../components/tile/tile.component";

const routes: Routes = [{ path: "", component: SliderComponent }];

@NgModule({
  declarations: [SliderComponent, TileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SliderModule {}
