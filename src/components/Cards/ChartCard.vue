<template>
  <md-card>
    <md-card-header class="md-card-header" data-background-color="green">
      <h4 class="title">Bienvenido</h4>
      <p class="category"></p>
    </md-card-header>
    <div class="logo-img">
      <img :src="imgLogo" alt="" />
    </div>
  </md-card>
</template>
<script>
export default {
  name: "chart-card",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },
    imgLogo: {
      type: String,
      default: require("@/assets/img/concredito.png")
    }
  },
  data() {
    return {
      chartId: "no-id"
    };
  }
};
</script>
<style>
.md-card img {
  width: 100%;
  height: auto;
}
</style>
