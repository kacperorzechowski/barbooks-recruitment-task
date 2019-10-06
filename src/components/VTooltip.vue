<template>
  <div class="tooltip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTooltip'
}
</script>

<style lang="scss" scoped>
  .tooltip {
    font-size: 9px;
    color: white;
    background-color: #5b7491;
    width: 10px;
    height: 10px;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    border-radius: 51%;
    vertical-align: middle;
  }
</style>
