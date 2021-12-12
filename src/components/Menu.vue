<template>
  <div class="menu">
    <h3>this is menu</h3>
    <p>Data in store: {{$store.state.count}}</p>
    <p>cach khac Data in store: {{count}}</p>
    <p>country Name: {{countryName}} <button @click="updateProfile">thay doi ten</button></p>

  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['count', 'countryName'])  // chuyen $store.state.count thanh this.count
  },
  methods: {
    ...mapMutations(['setCountryName']),  // dung this.setCountryName('..')
    ...mapActions(['updateProfile'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
