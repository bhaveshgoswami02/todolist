import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  value:number = 50;
  diameter:number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
