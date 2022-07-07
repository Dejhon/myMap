import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {Geocoder} from 'leaflet-control-geocoder';
import 'esri-leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;

  constructor() { }

  ngAfterViewInit(): void{
        this.initMap();
  }

  private initMap(): void {
  // Latitude and longitude of Jamaica
  var map = L.map('map').setView([18.18, -77.4], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var searchControl = L.esri.Geocoding.geosearch({
    position: 'topright',
    placeholder: 'Enter your address',
    useMapBounds: false,
    providers: [L.esri.Geocoding.arcgisOnlineProvider({
      apikey: "AAPK12edeacac8b347b29e1ea68144493367HPBWLFkCBvKLNbs-mGw226gaErV2lgrs0AV8u5arx1X6hHDQ1qfcplKfdwLAZ5Qy", // I Generated this API key from - https://developers.arcgis.com
      nearby: {
        lat: 18.18,
        lng: -77.4
      }
    })]
  }).addTo(this.map);

  var results = L.layerGroup().addTo(this.map);
  searchControl.on('results', function (data:any) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });
 }
}


