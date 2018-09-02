[![Maintainability](https://api.codeclimate.com/v1/badges/155b98b38add2c148346/maintainability)](https://codeclimate.com/github/etalab/entreprise.data.gouv.fr/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/155b98b38add2c148346/test_coverage)](https://codeclimate.com/github/etalab/entreprise.data.gouv.fr/test_coverage)

# entreprise.data.gouv.fr

Ce site est disponible en ligne : [Entreprise.data.gouv.fr](https://entreprise.data.gouv.fr)

Dans le cadre du SPD, (Service Public de la Donnée), certains jeux de données
dont les fichiers SIRENE et RNA sont devenus publics.

Le site entreprise.data.gouv.fr a pour vocation de mettre à disposition des citoyens les données ouvertes "Open-data".

Les API exploitées par ce front-end sont les suivantes :

  - Une API Ruby on Rails qui importe les fichiers de données
    mis à disposition par l'INSEE : [sirene_as_api](https://github.com/etalab/sirene_as_api)
  - Une API Ruby on Rails qui importe les fichiers de données
    mis à disposition par l'INSEE : [sirene_as_api](https://github.com/etalab/rna_as_api)

## Exécution en local

``` bash
# Aprés avoir lancé le front-end avec la commande
npm run dev

# Lancer le back-end : dans le dossier sirene_as_api / rna_as_api, exécuter :
rails s

# Lancer le serveur SOLR :
rake sunspot:solr:start

```

## Dev

``` bash
# Lancer les tests
npm run test

# Construire pour la production
npm run build

```

## Licence

Ce projet est sous [license MIT](https://fr.wikipedia.org/wiki/Licence_MIT)
