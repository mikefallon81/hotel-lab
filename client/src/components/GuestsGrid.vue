<template lang="html">
  <div id="guestsGrid">
    <div class="guest" v-for="guest in guests">
      <h3>Name: {{guest.name}}</h3>
      <h3>email: {{guest.email}}</h3>
      <h3>Check in Status: {{guest.checkInStatus}}</h3>

      <button v-on:click="handleDelete(guest._id)">Delete guest</button>
    </div>
  </div>
</template>

<script>
import GuestsService from '../services/GuestsService'
import { eventBus } from '../main'


export default {
  name: "guests-grid",
  props: ["guests"],

methods: {
  handleDelete(id){
    GuestsService.deleteGuest(id)
      .then(response => eventBus.$emit('guest-deleted', id));
  }
}
}
</script>

<style lang="css" scoped>
</style>
