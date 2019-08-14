<template lang="html">
  <div>

    <h1>Guests</h1>
  <div id="guestsGrid">
    <div class="guest" v-for="guest in guests">
      <h3>Name: {{guest.name}}</h3>
      <h3>email: {{guest.email}}</h3>
      <h3 v-if="guest.checkInStatus === true">Checked in</h3>
      <h3 v-else>Checked out</h3>

      <button class="deleteBtn" v-on:click="handleDelete(guest._id)">Delete guest</button>
    </div>
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
#guestsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

  .guest {
    border-style:double;
    margin: 5px;
    padding: 10px;
  }

  .deleteBtn {
    font-weight: bold;
    color: red;
    border-width: thick;
    margin-bottom: 5px;
  }
</style>
