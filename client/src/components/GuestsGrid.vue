<template lang="html">
  <div id="guestsGrid">
    <div class="guest" v-for="guest in guests">
      <h3>Name: {{guest.name}}</h3>
      <h3>email: {{guest.email}}</h3>
      <h3>Check in Status {{guest.checkInStatus}}</h3>

      <button>Delete guest</button>
    </div>
  </div>
</template>

<script>
import GuestService from '@/sevices/GuestService.js'



export default {
  name: "guests-grid",
  props: ["guests"]
}
</script>

<style lang="css" scoped>
</style>
