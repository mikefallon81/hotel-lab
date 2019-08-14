<template>
  <div id="app">
    <guests-grid :guests="guests" />
  </div>
</template>

<script>
import { eventBus } from './main.js'
import GuestsService from './services/GuestsService'
import GuestsGrid from './components/GuestsGrid'

export default {

  name: 'app',

  data () {
    return {
      guests: []
    }
  },

  components: {
    'guests-grid': GuestsGrid,
  },

  mounted(){
    this.fetchData();


  },

  methods: {
    fetchData(){
      GuestsService.getGuests()
      .then(guests => this.guests = guests);
    }
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
  margin-top: 60px;
}
</style>
