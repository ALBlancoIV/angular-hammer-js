import { Component, OnInit, Input } from "@angular/core";
import { CataloguesService } from "../../services/catalogues.service";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss", "../Styles/ResponsiveDesign.scss"]
})

export class SliderComponent implements OnInit {
  featured: any[];
  items: any;
  count: number = 26;
  pageCode: string;

  SWIPE_ACTION = { LEFT: "swipeleft", RIGHT: "swiperight" };

  constructor(private catalogues: CataloguesService) {}

  ngOnInit() {
    this.getWorld(this.count, this.pageCode);
  }

  getWorld(count, code) {
    this.featured = [];
    for (let x = 1; x <= count; x++) {
      this.catalogues.getWorld(x, code).subscribe(res => {
        this.items = res;
          if (this.items.worlds.length !== 0) {
            this.featured.push(this.items);
          }
      });
    }
  }
  swipeEvent(Elem: HTMLElement, action) {
    if (action === this.SWIPE_ACTION.RIGHT) {
      console.log('right');
    }

    if (action === this.SWIPE_ACTION.LEFT) {
      console.log('left');
      
    }
  }
}
