import { Component, OnInit } from '@angular/core';
import { ScreensService } from 'src/app/shared/screens.service';
import { Screen } from '../../models/Screen';

@Component({
  selector: 'app-add-screen-page',
  templateUrl: './add-screen-page.component.html',
  styleUrls: ['./add-screen-page.component.scss']
})
export class AddScreenPageComponent implements OnInit {
  screen = new Screen('', false, false);
  constructor(private screensService: ScreensService) { }

  ngOnInit(): void {
  }

  addScreen() {
    this.screensService.createScreen(this.screen).subscribe(() => {
      alert('A new screen has been added.');
    });
  }

}
