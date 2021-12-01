<script>
import { MapElementFactory } from "vue2-google-maps";
export default MapElementFactory({
  name: "directionsRenderer",
  ctr() {
    return window.google.maps.DirectionsRenderer;
  },
  events: [],
  mappedProps: {},
  props: {
    origin: { type: Object },
    destination: { type: Object },
    travelMode: { type: String },
  },
  afterCreate(directionsRenderer) {
    let directionsService = new window.google.maps.DirectionsService();
    // let directionsDisplay = new window.google.maps.DirectionsRenderer();
    this.$watch(
      () => [this.origin, this.destination, this.travelMode],
      () => {
        let { origin, destination, travelMode } = this;
        if (!origin || !destination || !travelMode) {
          // clear route
          directionsRenderer.setDirections({ routes: [] });
          return;
        }
        directionsService.route(
          {
            origin,
            destination,
            travelMode,
          },
          (response, status) => {
            if (status !== "OK") return;
            directionsRenderer.setDirections(response);
          }
        );
      }
    );
  },
});
</script>
