import { Component, OnInit, AfterViewInit } from '@angular/core';
import { google } from 'google-maps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  google: google;
  map: any;
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    const brussels = new google.maps.LatLng(50.82, 4.35);
    const mapOptions = {
      zoom: 9,
      center: brussels
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
      position: brussels
    });
    marker.setMap(this.map);
  }
}
