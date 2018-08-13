import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ScaleLine from 'ol/control/ScaleLine';
import Zoom from 'ol/control/Zoom';
import { transform } from 'ol/proj';

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
}

export default LocationMap;
