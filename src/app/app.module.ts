import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SliderModule } from "./slider/slider.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavigationComponent } from "./components/navigation/navigation.component";
import { HeroSliderComponent } from "./components/hero-slider/hero-slider.component";
import { CategoryComponent } from "./components/category/category.component";

import { DragScrollModule } from "ngx-drag-scroll"; //not used
import { DeferLoadModule } from "@trademe/ng-defer-load"; //Lazy Loading Imgs
import { NgxHmCarouselModule } from 'ngx-hm-carousel'; //carousel for hero component

@NgModule({
  declarations: [AppComponent, NavigationComponent, HeroSliderComponent, CategoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragScrollModule,
    DeferLoadModule,
    SliderModule,
    NgxHmCarouselModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
