<template>
  <section class="section-grey text-center public-administration">
    <div class="container">
        <p>
          Vous êtes une administration publique ?<br />
          Demandez votre accès spécial à l'API Entreprise pour obtenir des informations supplémentaires sur les sociétés
        </p>
        <a class="button" href="https://entreprise.api.gouv.fr/">Demander un accès</a>
      </div>
  </section>
</template>

<script>
export default {
  name: 'PublicAdministration'
}
</script>

<style lang="scss" scoped>
.public-administration {
  padding: 4em;
  text-align: center;
}

.public-administration p {
  margin-left: auto;
  margin-right: auto;
}

</style>
