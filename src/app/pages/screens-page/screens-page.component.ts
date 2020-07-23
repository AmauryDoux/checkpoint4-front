import { ScreensService } from './../../shared/screens.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-screens-page',
  templateUrl: './screens-page.component.html',
  styleUrls: ['./screens-page.component.scss']
})
export class ScreensPageComponent implements OnInit {
  screens: any;

  constructor(private screensService: ScreensService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients() {
    this.screensService.getAllScreens().subscribe(data => {
      this.screens = data;
      console.log(this.screens);
    });
  }

  openModal() {

  }

}
