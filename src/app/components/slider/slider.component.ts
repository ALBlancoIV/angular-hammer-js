import { Component, OnInit, Input } from "@angular/core";
import { CataloguesService } from "../../services/catalogues.service";
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/typings/overlay-directives';

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss", "../Styles/ResponsiveDesign.scss"]
})
export class SliderComponent implements OnInit {
  @Input() allVidLikes: any;
  featured: any[];
  items: any;
  count: number = 26;
  pageCode: string;

  SWIPE_ACTION = { LEFT: "swipeleft", RIGHT: "swiperight" };

  constructor(private catalogues: CataloguesService) {}

  ngOnInit() {
    // this.catalogues
    //   .getWorld(this.count, this.pageCode)
    //   .subscribe((res: any) => {
    //     this.items = res;
    //     console.log(this.items);
    //   });
    this.getWorld(this.count, this.pageCode);
  }

  getWorld(count, code) {
    this.featured = [];
    for (let x = 1; x <= count; x++) {
      this.catalogues.getWorld(x, code).subscribe(res => {
        this.items = res;
        console.log(this.items.worlds);
        console.log(this.items);
        console.log(this.items.statusCode);
        // Added to check if the user already liked or disliked an item
        // if (this.items.statusCode === 200) {
          if (this.items.worlds.length !== 0) {
           
            this.featured.push(this.items);
            // category.map(showID => this.getEpisodes(showID, this.count));
          }
        // }
      });
    }
  }
  swipeEvent(Elem: HTMLElement, action) {
    if (action === this.SWIPE_ACTION.RIGHT) {
      console.log('right');
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
      console.log('left');
      
    }
  }
}
