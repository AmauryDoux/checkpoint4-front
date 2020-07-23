import { GeocodingService } from './../../../shared/geocoding.service';
import { Component, OnInit, Input } from '@angular/core';
import { ScreensService } from 'src/app/shared/screens.service';

@Component({
  selector: 'app-screens-list',
  templateUrl: './screens-list.component.html',
  styleUrls: ['./screens-list.component.scss']
})
export class ScreensListComponent implements OnInit {

  @Input() screens: any;

  constructor(private screensService: ScreensService, private geocodingService: GeocodingService) { }

  ngOnInit(): void {
  }

  editScreen(id) {
    this.screensService.updateScreen(id).subscribe(() => {
    });
  }

  deleteScreen(id) {
    this.screensService.deleteScreen(id).subscribe(() => {
    });
  }

  geoCodeAddress(address) {
    this.geocodingService.getAddressCodes(address).subscribe(() => {
    });
  }

}
