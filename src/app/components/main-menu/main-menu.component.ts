import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  host: {
    class:'bg-gradient-primary sidebar sidebar-dark accordion'
  }
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
