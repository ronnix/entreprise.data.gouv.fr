<template>
  <div class="company__panel panel">
    <ul class="company__info-list">
      <div class="company__item"><div class="company__item-key">SIRET</div><div class="company__item-value"> {{ resultSirene.siret }}</div></div>
      <div class="company__item"><div class="company__item-key">SIREN</div><div class="company__item-value"> {{ resultSirene.siren }}</div></div>
      <div class="company__item"><div class="company__item-key">Clef NIC</div><div class="company__item-value"> {{ resultSirene.nic }}</div></div>
      <div class="company__item"><div class="company__item-key">Activité principale Etablissement</div><div class="company__item-value"> {{ resultSirene.activite_principale }} - {{ resultSirene.libelle_activite_principale }}</div></div>
      <div class="company__item"><div class="company__item-key">Activité principale Entreprise</div><div class="company__item-value"> {{ resultSirene.activite_principale_entreprise }} - {{ resultSirene.libelle_activite_principale_entreprise }}</div></div>
      <div class="company__item"><div class="company__item-key">Nature juridique</div><div class="company__item-value"> {{ resultSirene.libelle_nature_juridique_entreprise | ifExist }}</div></div>
      <div class="company__item"><div class="company__item-key">Numéro RNA</div><div class="company__item-value"> {{ resultSirene.numero_rna | ifExist }}</div></div>
      <div class="company__item"><div class="company__item-key">N° TVA Intracommunautaire</div><div class="company__item-value"> {{ tvaIntracommunautaire }}</div></div>
    </ul>
  </div>
</template>

<script>
import Filters from '@/components/mixins/filters'

export default {
  name: 'EtablissementSireneInfo',
  computed: {
    resultSirene () {
      return this.$store.getters.singlePageEtablissementSirene
    },
    tvaIntracommunautaire () {
      const tvaKey = (12 + 3 * (this.resultSirene.siren % 97)) % 97
      const tvaNumber = `${tvaKey}${this.resultSirene.siren}`
      return `FR${tvaNumber}`
    }
  },
  mixins: [Filters]
}
</script>

<style lang="scss" scoped>
  .panel {
    border: 2px solid $color-lighter-blue;
    // border: 2px $color-light-pink solid;
  }
</style>
