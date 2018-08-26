
<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>


<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  height: auto !important;
  width: 100% !important;
  margin-left: 0px !important;
  padding-right: 0px !important;
}
</style>
