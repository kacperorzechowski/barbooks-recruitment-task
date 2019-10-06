<template>
  <div>
    <button :class="`button ${color}-button`">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './../assets/sass/variables';

  .button {
    padding: 10px 30px;
    border: none;
    font-size: 15px;
    cursor: pointer;
  }
  .primary-button {
    background: $primary;
    color: white;
  }
</style>
