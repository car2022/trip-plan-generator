<template>
  <TripComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TripComponent from "./components/trip_component/index.vue";

export default defineComponent({
  name: "App",
  components: {
    TripComponent,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
</style>
