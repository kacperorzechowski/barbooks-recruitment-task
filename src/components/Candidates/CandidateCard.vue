<template>
  <div class="candidate-card">
    <div class="name">{{ candidate.name }}</div>
    <div class="email">{{ candidate.email }}</div>
    <div class="skills">
      {{ skills }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CandidateCard',
  props: {
    candidate: {
      type: Object,
      required: true
    }
  },
  computed: {
    skills () {
      let { skills } = this.candidate

      if (skills.length > 3) {
        skills = `${skills.slice(0, 3).join(' + ')} + ${skills.slice(3).length} other${skills.slice(3).length > 1 ? 's' : ''}`
      } else {
        skills = skills.join(' + ')
      }

      return skills
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './../../assets/sass/variables';
  .candidate-card {
    background-color: $accent1;
    padding: 10px 20px;
    border: 1px solid $accent2;
    .name {
      font-size: 26px;
    }
    .email {
      padding: 5px 0;
      font-size: 14px;
      color: lightgray;
    }
    .skills {
      color: $primary;
    }
  }
</style>
