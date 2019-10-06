<template>
  <div>
    <h1>Register</h1>

    <validation-observer ref="observer" v-slot="{ invalid, errors }" tag="form" @submit.prevent="submit()">
      <v-input v-model="form.name" id="name" name="Name" label="Name" :tooltip="nameTooltip"
               rules="required"></v-input>
      <v-input v-model="form.email" id="email" name="Email" label="Email"
               rules="required|email"></v-input>
      <v-select v-model="form.skills" id="skills" name="Skills" label="Skills" rules="required"
                :options="skills"></v-select>
      <span class="input-error">
        {{ getFieldError('Skills', errors) }}
      </span>

      <v-button class="text-right mt-1-5">Send</v-button>
    </validation-observer>

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
    nameTooltip: 'Let\'s be friends, please provide your name so we can get in touch with you!'
  }),
  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate()

      if (isValid) {
        this.sendForm()
      }
    },
    sendForm () {
      this.$store.commit('candidates/addCandidate', this.form)
      /*
      I would definitely use some kind of snackbar here (instead of calling alert),
      like one from Vuetify but I have decided to skip creating it, because of lack of time.
       */
      alert('Your application was sent!')
      this.$router.push({ name: 'Home' })
    },
    getFieldError (name, errors) {
      let error = ''

      if (errors.hasOwnProperty(name)) {
        error = errors[name][0]
      }

      return error
    }
  }
}
</script>
