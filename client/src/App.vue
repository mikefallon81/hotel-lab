<template>
  <div id="app">
    <guests-form />
    <guests-grid :guests="guests" />
  </div>
</template>

<script>
import { eventBus } from './main.js'
import GuestsService from './services/GuestsService'
import GuestsGrid from './components/GuestsGrid'
import GuestsForm from './components/GuestsForm'

export default {

  name: 'app',

  data () {
    return {
      guests: []
    }
  },

  components: {
    'guests-grid': GuestsGrid,
    'guests-form': GuestsForm
  },

  mounted(){
    this.fetchData();

    eventBus.$on('guest-added', guest => this.guests.push(guest));

    eventBus.$on('guest-deleted', id => {
      const index = this.guests.indexOf(guest => guest.id === id);
      this.guests.splice(index, 1);
    })
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
