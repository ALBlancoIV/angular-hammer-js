import { BrowserModule } from "@angular/platform-browser";
<<<<<<< Updated upstream
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from "@angular/platform-browser";
=======
>>>>>>> Stashed changes
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SliderComponent } from "./components/slider/slider.component";
import { TileComponent } from "./components/tile/tile.component";

<<<<<<< Updated upstream
import { DragScrollModule } from "ngx-drag-scroll";
import { DeferLoadModule } from '@trademe/ng-defer-load';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { velocity: 0.0, threshold: 10 } // override default settings
  };
}
=======
>>>>>>> Stashed changes
@NgModule({
  declarations: [AppComponent, SliderComponent, TileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< Updated upstream
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    DragScrollModule,
    DeferLoadModule
=======
    ScrollingModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
