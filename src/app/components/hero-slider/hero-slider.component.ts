import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hero-slider",
  templateUrl: "./hero-slider.component.html",
  styleUrls: ["./hero-slider.component.scss"]
})
export class HeroSliderComponent implements OnInit {
  follow = true;
  enablePan = true;

  count: number = 1;
  pageCode: string;
  items: any;

  index = 8;
  speed = 500;
  infinite = true;
  direction = "right";
  directionToggle = true;
  autoplay = true;
  avatars = "123456789".split("").map((x, i) => {
    const num = i;
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`,
      show: false
    };
  });

  menus = "12345".split("").map((x, i) => {
    const num = i;
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });

  constructor() {}

  ngOnInit() {}

  toggleDirection($event) {
    this.direction = this.directionToggle ? "right" : "left";
  }

  log(val) {
    console.log(val);
  }
}
