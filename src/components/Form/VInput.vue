<template>
  <div class="v-input">
    <label :for="id">
      <span v-show="showLabel" class="label-text">
        {{ label }}
        <v-tooltip v-if="tooltip" :content="tooltip">i</v-tooltip>
      </span>
    </label>

    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
      <input
        :id="id"
        :value="value"
        :name="name"
        :class="{'has-error': errors.length > 0}"
        @input="updateInput($event.target.value)"
      />
      <span class="input-error">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import VTooltip from '../VTooltip'

export default {
  name: 'VInput',
  components: { VTooltip },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      required: false
    },
    label: {
      type: [String, Boolean],
      required: false,
      default: false
    },
    tooltip: {
      type: [String, Boolean],
      required: false,
      default: false
    },
    rules: {
      type: [String, Object],
      required: false
    },
    name: {
      type: String,
      required: false
    }
  },
  computed: {
    showLabel () {
      return this.label !== false
    }
  },
  methods: {
    updateInput (inputValue) {
      this.$emit('input', inputValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  $errorColor: #ff444b;
  .has-error {
    border: 1px solid #ff444b;
  }
</style>
