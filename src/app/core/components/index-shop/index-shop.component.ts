import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tplu9-index-shop',
  templateUrl: './index-shop.component.html',
  styleUrls: ['./index-shop.component.css']
})
export class IndexShopComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor() { }

  ngOnInit(): void {
  }
}
