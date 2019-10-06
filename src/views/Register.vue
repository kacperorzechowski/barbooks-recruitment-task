<template>
  <div>
    <h1>Register</h1>
    <v-input v-model="form.name" id="name" label="Name" :tooltip="nameTooltip"></v-input>
    <v-input v-model="form.email" id="email" label="Email"></v-input>
    <v-select v-model="form.skills" id="skills" label="Skills" :options="skills"></v-select>

    <v-button class="text-right mt-1-5" @click.native="sendForm">Send</v-button>
  </div>
</template>

<script>
import VInput from '../components/Form/VInput'
import VSelect from '../components/Form/VSelect'
import VButton from '../components/VButton'

export default {
  name: 'Register',
  components: {
    VButton,
    VSelect,
    VInput
  },
  data: () => ({
    skills: ['Vue', 'React', 'Angular', 'MySql', 'PHP'],
    form: {
      name: null,
      email: null,
      skills: null
    },
    nameTooltip: "Let's be friends, please provide your name so we can get in touch with you!"
  }),
  methods: {
    sendForm () {
      this.$store.commit('candidates/addCandidate', this.form)
      /*
      I would definitely use some kind of snackbar here (instead of calling alert),
      like one from Vuetify but I have decided to skip creating it, because of lack of time.
       */
      alert('Your application was sent!')
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
