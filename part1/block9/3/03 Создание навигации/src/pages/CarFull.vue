<template>
  <div>
    <h4>Car name: {{ $route.query.name }}</h4>
    <h4>Car year: {{ year }}</h4>
    <div class="scroll"></div>
    <p id="scroll">Hello from the bottom</p>
  </div>
</template>

<script>
 export default {
  computed: {
    year () {
      return this.$route.query.year
    }
  }
}
</script>

<style>
.scroll {
  width: 100px;
  height: 1000px;
  background: #ccc;
}
</style>
