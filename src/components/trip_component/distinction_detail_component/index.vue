<template>
  <div class="root-container">
    <div class="distinction-table">
      <div class="distinction">
        <span class="distinction-label">行き先名称</span>
        <span class="distinction">{{ distinationName }}</span>
      </div>
      <div class="address">
        <span class="address-label">住所</span>
        <span class="address">{{ address }}</span>
      </div>
    </div>
  </div>
  <iframe
    :src="`http://maps.google.co.jp/maps?q=${this.distinationName}&output=embed`"
    width="300"
    height="200"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DistinctionDetailComponent",
  props: {
    distinationName: String,
    address: String,
  },
});
</script>

<style scoped src="./index.css" />
