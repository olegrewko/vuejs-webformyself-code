<template>
    <div class="container pt-2">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <router-link tag="li" class="nav-item" exact to="/" active-class="active">
              <a class="nav-link">Home</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/cars" active-class="active">
              <a class="nav-link">Cars</a>
            </router-link>

            <router-link tag="li" class="nav-item" to="/car/3" active-class="active">
              <a class="nav-link">Car 3</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/car/4" active-class="active">
              <a class="nav-link">Car 4</a>
            </router-link>
          </ul>
        </div>
      </nav>
      <div class="form-group">
        <label for="name">Car name</label>
        <input type="text" id="name" class="form-control" v-model.trim="carName">
      </div>
        <div class="form-group">
        <label for="year">Car year</label>
        <input type="text" id="year" class="form-control" v-model.number="carYear">
      </div>

      <button class="btn btn-success" @click="createCar">Create car</button>
      <button class="btn btn-primary" @click="loadCars">Load cars</button>
       <hr>

      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="car of cars"
          :key="car.id"
        >
          <strong>{{ car.name }}</strong> - {{ car.year }}
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      carName: '',
      carYear: 2018,
      cars: []
    }
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      }

      this.$http.post('http://localhost:3000/cars', car)
        .then(response => {
          return response.json()
        })
        .then(newCar => {
          console.log(newCar)
        })
      // this.resourse.save({}, car)
    },
     loadCars() {
      this.$http.get('http://localhost:3000/cars')
        .then(response => {
          return response.json()
        })
        .then(cars => {
          this.cars = cars
        })
    }
  }
}
</script>
