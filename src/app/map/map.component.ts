import { Component, AfterViewInit } from '@angular/core';
import { MapService } from '../map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private data: any = [];


  constructor(private mapService: MapService) { }


  private initMap(): void {
    this.mapService.sendGetRequest().subscribe((data: any[])=>{
      this.data = data
      console.log(this.data.data[0].latitude)
      // lat = this.data.data[0].latitude
  
    })

    this.map = L.map('map', {
      center: [ this.data.data[0].latitude, -76.86722 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([ 17.97024, -76.86722 ])
    marker.addTo(this.map)

  }

 

  ngAfterViewInit(): void {
    this.initMap();
  }

}
