<template>
  <div>
    <h1>Cars id {{ id }}</h1>
    <button class="btn btn-sm btn-default" mb-2 @click="GoBackToCars">Back</button>
    <br>
    <router-link class="btn btn-sm btn-info" mt-2
     tag="button"
     :to="{ name: 'carFull', params: { id: id }, query: {name: 'Mazda', year: 3000}, hash: '#scroll' }"
     >Full info</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // id: this.$router.currentRoute.params['id']
      id: this.$route.params['id']
    }
  },
  methods: {
    GoBackToCars () {
      this.$router.push('/cars')
    }
  },
  watch: {
    $route (toR, fromR) {
      this.id = toR.params['id']
    }
  }
}
</script>

<style scoped></style>
