<template>
  <div class="stores-page">
      <GmapMap
      class="map"
      ref="mapRef"
      :center="{lat:32.088007, lng:34.8031678}"
      :zoom="18"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="setCenter(m.position)"
      />
    </GmapMap>
    <ul class="stores-list">
      <li v-for="(store, index) in markers"><button @click="setCenter(store.position)">{{store.name}}</button></li>
    </ul>
  </div>
</template>

<script>

export default {
data() {
    return {
      markers: [
        { position: { lat: 32.0853, lng: 34.7818 }, name: 'Tel Aviv' },
        { position: { lat: 32.0684, lng: 34.8248 }, name: 'Ramat Gan' },
        { position: { lat: 31.7683, lng: 35.2137 }, name: 'Jerusalem' }
      ]
    }
  },
  methods: {
    setCenter(pos) {
      this.$refs.mapRef.$mapPromise.then(map => {
        map.panTo(pos);
      });
    }
  },
};
</script>
