import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ScaleLine from 'ol/control/ScaleLine';
import Zoom from 'ol/control/Zoom';
import { transform, fromLonLat } from 'ol/proj';
import '../styles/map.css';

const layer = new TileLayer({
  source: new OSM(),
});

class LocationMap {
  constructor(id, lat, lon) {
    const coords = transform([lon, lat], 'EPSG:4326', 'EPSG:3857');
    this.map = new Map({
      layers: [layer],
      target: id,
      view: new View({
        center: coords,
        zoom: 12,
      }),
      controls: [new Zoom(), new ScaleLine({ units: 'metric' })],
    });
  }

  setCenter(lat, lon) {
    const coords = transform([lon, lat], 'EPSG:4326', 'EPSG:3857');
    this.map.getView().setCenter(coords);
  }

  setLocationOverlays(locations) {
    document.querySelectorAll(`#${this.map.getTarget()} .ol-overlay-container`).forEach(el => el.remove());
    const mapCont = document.getElementById(this.map.getTarget());
    locations.forEach((location) => {
      const pos = transform([Number(location.lon), Number(location.lat)], 'EPSG:4326', 'EPSG:3857');
      const marker = document.createElement('DIV');
      const label = document.createElement('DIV');
      label.innerHTML = location.cuisines;
      marker.className = 'overlay';
      label.className = 'overlay-label';
      mapCont.appendChild(marker);
      mapCont.appendChild(label);
      this.map.addOverlay(new Overlay({
        position: pos,
        positioning: 'center-center',
        element: marker,
      }));
      this.map.addOverlay(new Overlay({
        position: pos,
        positioning: 'top-center',
        element: label,
      }));
    });
  }
}

export default LocationMap;
