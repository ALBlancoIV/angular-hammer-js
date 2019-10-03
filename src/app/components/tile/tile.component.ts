import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tile",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.scss"]
})
export class TileComponent implements OnInit {
  @Input() worldsData: any;

  horizontalPx: number = 5;

  constructor() {}

  ngOnInit() {}
  log(msg) {
    console.log(msg);
  }
}
