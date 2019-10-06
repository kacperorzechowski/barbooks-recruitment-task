<template>
  <div class="v-input">
    <label :for="id">
      <span v-show="showLabel" class="label-text">
        {{ label }}
      </span>
    </label>

    <input
      :id="id"
      :value="value"
      @input="updateInput($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'VInput',
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

</style>
