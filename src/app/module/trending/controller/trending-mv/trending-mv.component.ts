import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-mv',
  templateUrl: './trending-mv.component.html',
  styleUrls: ['./trending-mv.component.scss']
})
export class TrendingMvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	console.log('MRT');
  }

}
