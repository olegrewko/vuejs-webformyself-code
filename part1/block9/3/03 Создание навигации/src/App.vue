<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li> -->
            <!-- <li class="nav-item">
              <router-link class="nav-link" :to="'/cars'">Cars</router-link>
            </li> -->
            <router-link tag="li" class="nav-link" to="/" active-class="active" exact>
              <a class="nav-link">Home</a>
            </router-link>
            <router-link tag="li" class="nav-link" to="/cars" active-class="active">
              <a class="nav-link">Cars</a>
            </router-link>

            <router-link tag="li" class="nav-link" to="/car/3" active-class="active" exact>
              <a class="nav-link">Car3</a>
            </router-link>
            <router-link tag="li" class="nav-link" to="/car/4" active-class="active">
              <a class="nav-link">Car4</a>
            </router-link>
          </ul>
        </div>
      </nav>

      <router-view></router-view>
    </div>
</template>

<script>
  export default {}
</script>
