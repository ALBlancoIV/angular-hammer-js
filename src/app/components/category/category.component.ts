import { Component, OnInit } from '@angular/core';

import { NgxHmCarouselBreakPointUp } from 'ngx-hm-carousel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  currentIndex = 3;
  speed = 1000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '12345'.split('').map((x, i) => {
    const num = i;
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`,
      show: false
    };
  });

  breakpoint: NgxHmCarouselBreakPointUp[] = [
    {
      width: 0,
      number: 1
    },
    {
      width: 0,
      number: 2
    },
    {
      width: 0,
      number: 3
    },
  ];

  constructor() { }

  click(i) {
    alert(`${i}`);
  }

}
