import Vue from 'vue'
import constants from '@/constants'
import store from '@/store/index.js'
import router from '@/router/index.js'

const state = {
  storedFullText: '',
  storedSiret: '',
  pageNumber: 1,
  baseAdress: constants.baseAdress,
  baseAdressSiret: constants.baseAdressSiret
}

const getters = {
  adressToGet: state => {
    return state.baseAdress + store.getters.queryToGet
  },
  queryToGet: state => {
    return store.state.route.query.fullText + store.getters.optionsToGet
  },
  pageNumberToGet: state => {
    return '?page=' + store.state.route.query.page
  },
  optionsToGet: state => {
    return store.getters.pageNumberToGet + store.getters.filtersToGet + store.getters.categoryToGet
  },
  categoryToGet: state => {
    switch (store.state.route.query.category) {
      case 'all':
        return ''
      case 'entreprises':
        return '&is_entrepreneur_individuel=no'
      case 'entreprisesIndividuelles':
        return '&is_entrepreneur_individuel=yes'
      case 'associations':
        return '&is_ess=O'
    }
  },
  filtersToGet: state => {
    let filters = ''
    if (store.state.route.query.postalCode) {
      filters = filters + '&code_postal=' + store.state.route.query.postalCode
    }
    if (store.state.route.query.activityCode) {
      filters = filters + '&activite_principale=' + store.state.route.query.activityCode
    }
    return filters
  },
  adressToGetWithoutCategories: state => {
    return state.baseAdress + store.state.route.query.fullText + store.getters.pageNumberToGet + store.getters.filtersToGet
  }
}

const mutations = {
  setFullText (state, value) {
    state.storedFullText = value
  },
  setSiret (state, value) {
    state.storedSiret = value
  },
  setPage (state, value) {
    state.pageNumber = value
  },
  executeSearchBySiret (state, siret) {
    store.dispatch('hideWelcomeText')
    Vue.http.get(state.baseAdressSiret + siret).then(response => {
      store.commit('setSinglePageResults', response.body)
    }, response => {
      store.commit('setSinglePageResults', null)
    })
  }
}

const actions = {
  requestSearch () {
    router.push({ path: '/search',
      query: {
        fullText: state.storedFullText,
        page: state.pageNumber,
        postalCode: store.state.filters.filterPostalCode,
        activityCode: store.state.filters.filterActivityCode,
        category: store.state.categories.focusedCategory
      }
    })
    store.dispatch('executeSearch')
    store.dispatch('executeNumberSearches')
  },
  executeSearch () {
    if (store.getters.infoMessage) {
      return false
    }
    store.dispatch('hideWelcomeText')
    Vue.http.get(store.getters.adressToGet).then(response => {
      store.commit('setResults', response.body)
      store.commit('setStatus', response.status)
    }, response => {
      if (state.pageNumber > 1) {
        store.commit('setPage', 1)
        store.dispatch('executeSearch')
      } else {
        store.commit('setStatus', response.status)
      }
    })
  },
  executeNumberSearches () {
    const categories =
      [{name: 'all', query: ''},
       {name: 'entreprises', query: '&is_entrepreneur_individuel=yes'},
       {name: 'entreprisesIndividuelles', query: '&is_entrepreneur_individuel=no'},
       {name: 'associations', query: '&is_ess=O'}]
    categories.forEach(function (category) {
      Vue.http.get(store.getters.adressToGetWithoutCategories + category.query).then(response => {
        store.commit('setNumberCategory', {name: category.name, value: response.body.total_results})
      }, response => {
        store.commit('setNumberCategory', {name: category.name, value: 0})
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
