<template>
  <div>
    <h1>Register</h1>
    <v-input v-model="form.name" id="name" label="Name"></v-input>
    <v-input v-model="form.email" id="email" label="Email"></v-input>
    <v-select v-model="form.skills" id="skills" label="Skills" :options="skills"></v-select>
  </div>
</template>

<script>
import VInput from '../components/Form/VInput'
import VSelect from '../components/Form/VSelect'
export default {
  name: 'Register',
  components: { VSelect, VInput },
  data: () => ({
    skills: ['Vue', 'React', 'Angular', 'MySql', 'PHP'],
    form: {
      name: null,
      email: null,
      skills: null
    }
  })
}
</script>

<style lang="scss" scoped>

</style>
