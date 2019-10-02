<template>
  <div>
    <h1>Register</h1>
    <v-input id="name" label="Name"></v-input>
    <v-input id="email" label="Email"></v-input>
    <v-select id="skills" label="Skills"></v-select>
  </div>
</template>

<script>
import VInput from '../components/Form/VInput'
import VSelect from '../components/Form/VSelect'
export default {
  name: 'Register',
  components: { VSelect, VInput }
}
</script>

<style lang="scss" scoped>

</style>
