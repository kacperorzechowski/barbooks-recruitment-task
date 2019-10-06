<template>
  <div>
    <div v-if="candidates.candidates.length > 0">
      <candidate-card
        :class="{'mt-1-5': key > 0}"
        v-for="(candidate, key) in candidates.candidates"
        :key="key"
        :candidate="candidate"
      ></candidate-card>

      <div class="send-own-submission mt-3">
        <span>Interested in sending own submission?
          <v-button class="register" @click.native="$router.push({name: 'Register'})">
            Register now!
          </v-button>
        </span>
      </div>
    </div>

    <div class="no-candidates-info" v-else>
      <h3>There are currently no candidates. <br><small>Why do not you become one?</small></h3>
      <v-button class="mt-3" @click.native="$router.push({name: 'Register'})">Register now!</v-button>
    </div>
  </div>
</template>

<script>
import CandidateCard from './CandidateCard'
import { mapState } from 'vuex'
import VButton from '../VButton'

export default {
  name: 'Candidates',
  components: { VButton, CandidateCard },
  computed: {
    ...mapState({
      candidates: 'candidates'
    })
  }
}
</script>

<style lang="scss" scoped>
  .no-candidates-info {
    text-align: center;
    small {
      font-weight: lighter;
    }
  }
  .send-own-submission {
    width: 100%;
    text-align: right;
    color: #717171;
    .register {
      display: inline;
    }
  }
</style>
