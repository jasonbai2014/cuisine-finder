import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const layer = new TileLayer({
  source: new OSM(),
});

class LocationMap {
  constructor(id, lat, lon) {
    this.map = new Map({
      layers: [layer],
      target: id,
      view: new View({
        center: [lat, lon],
        zoom: 10,
      }),
    });
  }
}

export default LocationMap;
