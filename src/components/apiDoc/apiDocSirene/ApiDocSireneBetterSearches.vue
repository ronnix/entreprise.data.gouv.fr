<template>
  <section class="section-grey">
    <div class="container">
      <div class="column__right">
        <h2>Des recherches textes plus puissantes.</h2>
        <p>
          De nombreuses options sont exploitables pour trouver exactement ce dont vous avez besoin.<br>
          Vous pouvez vous réferer au tableau suivant :
        </p>
        <table>
          <thead>
            <tr>
              <th>Filtrage désiré</th>
              <th>Paramètre requête</th> 
              <th>Valeur du paramètre</th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Activité principale de l'entreprise (code NAF)</td>
              <td><code>activite_principale</code></td>
              <td>Le code `activité principale` désiré</td> 
            </tr>
            <tr>
              <td>Code Postal</td>
              <td><code>code_postal</code></td> 
              <td>Le code postal désiré</td>
            </tr>
            <tr>
              <td>Code commune INSEE</td>
              <td><code>code_commune</code></td> 
              <td>Le code INSEE de la commune désiré</td>
            </tr>
            <tr>
              <td>Departement</td>
              <td><code>departement</code></td> 
              <td>Le numéro de département à 2 chiffres désiré</td>
            </tr>
            <tr>
              <td>Appartenance au champs de l'économie sociale et solidaire</td>
              <td><code>is_ess</code></td> 
              <td>`O` pour Oui, `N` pour Non, `I` pour Invalide</td>
            </tr>
            <tr>
              <td>Entreprises individuelles</td>
              <td><code>is_entrepreneur_individuel</code></td> 
              <td>`yes` pour Oui, `no` pour Non</td>
            </tr>
          </tbody>
        </table>
        <p>
          Ces options sont disponibles pour le moment uniquement sur la recherche Texte.<br>
          Notre API est en constante évolution, n'hésitez pas à nous écrire pour demander davantage d'options correspondant à vos besoins !
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApiDocSireneBetterSearches'
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.column__right {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
}

// Table style
table {
  background-color: $color-white;
  margin: 25px 0px auto;
  border-collapse: collapse;
  border: 1px solid $color-white;
  border-bottom: 2px solid $color-light-blue;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
     0px 10px 20px rgba(0,0,0,0.05),
     0px 20px 20px rgba(0,0,0,0.05),
     0px 30px 20px rgba(0,0,0,0.05);
  tr {
     &:hover {
      background: $color-lightest-grey;
      
      td {
        color: $color-blue;
      }
    }
  }
  th, td {
    color: $color-dark-grey;
    border: 1px solid $color-light-grey;
    border-collapse: collapse;
    padding: none;
    @media screen and (min-width: $tablet) {
      padding: 12px 35px;
    }
  }
  th {
    background: $color-light-blue;
    color: $color-white;
    text-transform: uppercase;
    font-size: 1em;
    @media screen and (min-width: $tablet) {
      font-size: 1.2em;
    }
    &.last {
      border-right: none;
    }
  }
}
// End table style

</style>
