import { AfterViewInit, Component } from '@angular/core';

import * as Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  leafletOptions = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: -31.375380878740653, lng: -64.14502602331522 },
    doubleClickZoom: false,
    closePopupOnClick: false,
    trackResize: false,
    touchZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
  }
 
  initMarkers() {
    const markerData = {
      position: { lat: -31.375380878740653, lng: -64.14502602331522 },
      draggable: true
    }

    const marker = this.generateMarker(markerData, 0);

    marker.addTo(this.map);

    this.map.panTo([-31.375, -64.145]);

  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
  }

}
