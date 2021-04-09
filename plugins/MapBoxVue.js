import Vue from 'vue';
import {
  MglMap,
  MglGeolocateControl,
  MglMarker,
  MglGeojsonLayer,
  MglPopup,
} from 'vue-mapbox';
import Mapbox from 'mapbox-gl';

Vue.component('MglMap', MglMap);
Vue.component('MglGeolocateControl', MglGeolocateControl);
Vue.component('MglPopup', MglPopup);
Vue.component('MglMarker', MglMarker);
Vue.component('MglGeojsonLayer', MglGeojsonLayer);

Vue.prototype.$mapbox = Mapbox;
