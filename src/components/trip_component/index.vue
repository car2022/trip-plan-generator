<template>
  <div class="root-container">
    <div class="title">旅行先生成サイト</div>
    <div class="to-trip-distination-btn" v-on:click="updateDistination()">
      行き先表示
    </div>
    <DistinctionDetailComponent
      :distinationName="distinationName"
      :address="address"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DistinctionDetailComponent from "./distinction_detail_component/index.vue";
import { inputData } from "@/feature/trip";

export default defineComponent({
  name: "TripComponent",
  data() {
    return {
      distinationName: "",
      address: "",
    };
  },
  components: {
    DistinctionDetailComponent,
  },
  beforeUpdate: function () {
    console.log("更新されたよ");
  },
  methods: {
    updateDistination: function () {
      console.log("updateDistination呼ばれたよ"),
        (this.distinationName = "銀閣寺"),
        (this.address = "〒606-8402 京都府京都市左京区銀閣寺町２");
    },
  },
  created() {
    this.distinationName = inputData.distinationName;
    this.address = inputData.address;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./index.css" />
