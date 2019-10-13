import {
  Component,
  OnInit,
  Input
} from "@angular/core";

@Component({
  selector: "app-tile",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.scss"]
})
export class TileComponent implements OnInit {
  @Input() worldsData: any;
  constructor() {}
  
  ngOnInit() {}

  log(msg) {
    console.log(msg);
  }

  arrowLeft(scrollElement: any) {
    let sliderElement = scrollElement.target.parentElement;
    let sliderVisibleWidth = scrollElement.target.parentElement.offsetWidth;
    sliderElement.scrollLeft -= sliderVisibleWidth;
  }

  arrowRight(scrollElement: any) {
    let sliderElement = scrollElement.target.parentElement;
    let sliderVisibleWidth = sliderElement.offsetWidth;

    sliderElement.scrollLeft += sliderVisibleWidth;
  }

  // panEvent(scrollElement: any) { // for pan events using HammerJS
  //   const parentElement = "sliderContent";
  //   let domElement;
  //   console.log(scrollElement);
  //   if (scrollElement.additionalEvent == "panright") {
  //     domElement = this.getParentElement(parentElement, scrollElement.target);
  //     domElement.scrollLeft -= domElement.offsetWidth;
  //   } else {
  //     domElement = this.getParentElement(parentElement, scrollElement.target);
  //     domElement.scrollLeft += domElement.offsetWidth;
  //   }
  // }

  getParentElement(parentElementToFind: string, node: Element) {
    let parentElement = node.parentElement;
    while (!(parentElement.className == parentElementToFind)) {
      parentElement = parentElement.parentElement;
    }
    return parentElement;
  }
}
