import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tplu9-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  addclass: string;
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Router activation
   */
  onActivate(componentReference: any) {
    this.addclass = componentReference.navClass;
  }

}
