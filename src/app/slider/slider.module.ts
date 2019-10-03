import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";

import { SliderComponent } from "../components/slider/slider.component";
import { TileComponent } from "../components/tile/tile.component";

import { DeferLoadModule } from "@trademe/ng-defer-load";
import { NgxProgressiveImageLoaderModule, IImageLoaderOptions } from 'ngx-progressive-image-loader';

const routes: Routes = [{ path: "", component: SliderComponent }];

@NgModule({
  declarations: [SliderComponent, TileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DeferLoadModule,
    NgxProgressiveImageLoaderModule.forRoot(<IImageLoaderOptions>{
      // rootMargin must be specified in pixels or percent
      rootMargin: '30px',
      threshold: 0.1,
      // css filter
      filter: 'blur(3px) drop-shadow(0 0 0.75rem crimson)',
      // image width / height ratio for image holder
      imageRatio: 16 / 9,
      // loading image in placeholder. Can be URL or base64
      placeholderImageSrc:
        // tslint:disable-next-line:max-line-length
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICA8cGF0aCBmaWxsPSIjZGQwMDMxIiBkPSJNMTI1IDMwTDMxLjkgNjMuMmwxNC4yIDEyMy4xTDEyNSAyMzBsNzguOS00My43IDE0LjItMTIzLjF6Ii8+CiAgPHBhdGggZmlsbD0iI2MzMDAyZiIgZD0iTTEyNSAzMHYyMi4yLS4xVjIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMUwxMjUgMzB6Ii8+CiAgPHBhdGggZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo='
    })
  ],
  exports: [SliderComponent, TileComponent]
})
export class SliderModule {}
