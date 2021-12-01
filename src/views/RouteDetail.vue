<template>
  <div class="container">
    <div class="select">
    <select id="standard-select" v-model="passenger" name="" >
      <option disabled selected>Please select a passenger</option>
      <option v-for="pass in client" :key="pass.id" :value="pass">
        {{ pass.name }}
      </option>
    </select>
    </div>
    <div class="flex-2 detail" v-if="item">
      <div class="maps-frame">
      <div class="google-map">
        <GmapMap
          class="google-map"
          :center="{ lat: 41.11, lng: 29.02 }"
          :zoom="12"
          style="width: inherit; height: inherit"
        >
          <DirectionsRenderer
            :origin="position"
            :destination="destination"
            travelMode="DRIVING"
          />
        </GmapMap>
      </div></div>
      <div class="info">
        <div class="create-form">
        <p >Name: {{ item.name }}</p>
        <p>Pick up Point Order : {{ item.pickUpOrder }}</p>
        <p>Trip Duration: {{ item.tripDuration.text }}</p>
        <p v-if="averageTripDuration">
          Average of Passengers Trip Duration:
          {{ (averageTripDuration / 60).toFixed(2) }} min
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DirectionsRenderer from "../components/DirectionsRenderer.vue";
import { mapState } from "vuex";
export default {
  components: {
    DirectionsRenderer,
  },
  data() {
    return {
      item: "",
      passenger: "Please select a passenger",
      position: null,
      destination: null,
    };
  },
  mounted() {
    if (this.$route.params.item) {
      this.passenger = this.$route.params.item;
    }
  },
  computed: {
    ...mapState(["client", "averageTripDuration"]),
  },
  watch: {
    passenger: function () {
      const passenger = this.client.filter(
        (item) => item.id === this.passenger.id
      );
      setTimeout(() => {
        this.position = passenger[0].pickUpLocation;
        this.destination = passenger[0].destination;
      }, 500);
      this.item = passenger[0];
    },
  },

};
</script>

<style lang="css">
:root {
  --select-border: #777;
  --select-arrow: var(--select-border);
}

select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  outline: none;
}
select::-ms-expand {
  display: none;
}

.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-image: linear-gradient(to top, #f2864b, #fff 33%);
}
.select select, .select::after {
  grid-area: select;
}
.select:not(.select--multiple)::after {
  content: "";
  justify-self: end;
  width: 0.8em;
  height: 0.5em;
  background-color: var(--select-arrow);
  -webkit-clip-path: polygon(100% 0%, 0 0%, 50% 100%);
          clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}

select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--select-focus);
  border-radius: inherit;
}

label {
  font-size: 1.125rem;
  font-weight: 500;
}

.select + label {
  margin-top: 2rem;
}
  
</style>