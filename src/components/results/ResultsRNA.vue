<template>
  <div>
    <h3>{{resultsNumberSentence}}</h3>
    <did-you-mean :api=api></did-you-mean>
    <ul>
      <li v-for="result in storedResultsAssociations" :key="result.id" class="panel">
        <router-link tag="a" class="no_base_style" :to="{ name: 'Etablissement', params: {searchId: result['id_association']}}">
          <h4 class="title">{{result['titre'] | capitalize }}</h4>
          <p>{{ result['objet'] | truncate }}</p>
          <p>{{result['adresse_code_postal']}} {{result['adresse_libelle_commune'] | capitalize}}</p>
        </router-link>
      </li>
    </ul>
    <p v-if="showNoResultMessage">Aucun résultat trouvé</p>
  </div>
</template>

<script>
import DidYouMean from '@/components/results/ResultsDidYouMean'
import Filters from '@/components/mixins/filters.js'

export default {
  name: 'ResultsRNA',
  data () {
    return {
      api: 'RNA'
    }
  },
  components: {
    'DidYouMean': DidYouMean
  },
  computed: {
    isSearchNotEmpty () {
      return this.$store.state.searchFullText.storedFullText !== ''
    },
    storedResultsAssociations () {
      return this.$store.getters.storedResultsAssociations
    },
    numberResults () {
      return this.$store.getters.numberResultsFullTextRNA
    },
    showNoResultMessage () {
      return this.numberResults === 0
    },
    resultsNumberSentence () {
      if (this.numberResults === undefined) {
        return ''
      }
      const numberResultsFormatted = Filters.methods.frenchNumberFormat(this.numberResults)
      return `${numberResultsFormatted} résultats pour "${this.$store.state.searchFullText.storedLastFullText}" dans la base RNA des associations`
    }
  },
  mixins: [Filters]
}
</script>

<style lang="scss" scoped>
  .title {
    display: inline;
    margin: 0.15em;
  }

  .subtitle {
    display: inline;
    margin-left: 5px;
    font-family: "Evolventa", "Trebuchet MS", sans-serif;
  }

  .panel {
    margin-bottom: 2em;
    cursor: pointer;
    padding: 1em;
    border: 1px solid $color-light-pink;
  }

  .no_base_style {
    text-decoration: none;
    color: $color-black;
  }

  p {
    margin: 0.15em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2em 0;

    li:hover {
      background-color: $color-lightest-grey;
    }
  }
</style>

