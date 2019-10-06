<template>
  <div class="v-input">
    <label :for="id">
      <span v-show="showLabel" class="label-text">
        {{ label }}
      </span>
    </label>

    <div v-if="selectedOptions.length > 0" class="selected-elements">
      <div class="pill has-margin-5" v-for="(item, index) of selectedOptions" :key="index" @click="removeItem(item)">
        {{ item }}
        <span>&times;</span>
      </div>
    </div>

    <div class="select-input">
      <input
        :id="id"
        v-model="searchBy"
        placeholder="search"
        @focus="setExpanded(true)"
      />
      <div class="select-activator" @click="setExpanded(!isExpanded)">
        <div :class="[isExpanded ? 'arrow-up' : 'arrow-down']"></div>
      </div>
    </div>

    <div v-show="isExpanded" class="options">
      <div v-for="(option, key) in filteredOptions" :key="key" class="option">
        <label class="option-label">
          <input type="checkbox" v-model="selectedOptions" :value="option" @change="emitValue"/>
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelect',
  model: {
    prop: 'value',
    event: 'change'
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
    options: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      filteredOptions: this.options,
      searchBy: null,
      selectedOptions: [],
      isExpanded: false
    }
  },
  computed: {
    showLabel () {
      return this.label !== false
    }
  },
  watch: {
    searchBy (value) {
      this.filteredOptions = this.options.filter((option) => option.toLowerCase()
        .includes(value.toLowerCase()))
    }
  },
  methods: {
    setExpanded (expanded) {
      this.isExpanded = expanded
    },
    removeItem (item) {
      this.selectedOptions = this.selectedOptions.filter((arrayItem) => arrayItem !== item)
    },
    emitValue () {
      this.$emit('change', this.selectedOptions)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './../../assets/sass/variables';

  .select-input {
    position: relative;
    padding-right: 20px;
    width: 100%;
  }

  .options {
    background: $accent1;
    border: 1px solid $lightgray;
    label {
      font-weight: 200;
      font-size: 14px;
      color: darkgray;
    }
  }

  .select-activator {
    position: absolute;
    top: 3px;
    right: 20px;
    padding: 10px;

    .arrow-down {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 5px 0 5px;
      border-color: $primary transparent transparent transparent;
    }

    .arrow-up {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent $primary transparent;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .selected-elements {
    margin-bottom: 15px;
  }
</style>
