<template lang="html">

    <form id="guests-form" v-on:submit="handleSubmit">
      <h2>Add Guest</h2>
      <div class="formWrap">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>

      <div class="formWrap">
        <label for="email">Email Address:</label>
        <input type="email" id="email" v-model="email" required>
      </div>

      <div class="formWrap">
        <input type="checkbox" id="checkbox" value="Checked-In" v-model="checkInStatus">
        <label for="checkedIn">Checked In:</label>

      </div>

      <input type="submit" id="save" value="save">

    </form>

</template>

<script>

import { eventBus } from '../main';
import GuestsService from '../services/GuestsService';

export default {
  name: "guests-form",
  data(){
    return {
      name: "",
      email: "",
      checkInStatus: null
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        checkInStatus: this.checkInStatus
      };

      GuestsService.postGuest(payload)
        .then(guest =>{
         eventBus.$emit('guest-added', guest);
    });
  }
}
}
</script>

<style lang="css" scoped>
</style>
