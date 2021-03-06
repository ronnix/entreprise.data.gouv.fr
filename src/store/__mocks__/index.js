/*eslint-disable no-undef*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  application: jest.fn().mockReturnValue([{
    isLoading: {
      'SIREN': jest.fn().mockReturnValue([{}]),
      'ID_ASSOCIATION': jest.fn().mockReturnValue([{}]),
      'SIRET': jest.fn().mockReturnValue([{}]),
      'FULLTEXT': jest.fn().mockReturnValue([{}])
    },
    error500: {
      'SIRENE': jest.fn().mockReturnValue([{}]),
      'RNA': jest.fn().mockReturnValue([{}])
    },
    noResultFound: {
      'SIRENE': jest.fn().mockReturnValue([{}]),
      'RNA': jest.fn().mockReturnValue([{}])
    },
    mainSearch: {
      'SIRENE': jest.fn().mockReturnValue([{}]),
      'RNA': jest.fn().mockReturnValue([{}])
    }
  }]),
  baseAdressSuggestions: jest.fn().mockReturnValue([{
    storedResults: {
      'RNA': jest.fn().mockReturnValue([{}]),
      'SIRENE': jest.fn().mockReturnValue([{}])
    },
    singlePageResult: {
      'RNA': jest.fn().mockReturnValue([{}]),
      'SIRENE':  jest.fn().mockReturnValue([{}])
    },
    storedStatus: {
      'RNA': jest.fn().mockReturnValue([{}]),
      'SIRENE': jest.fn().mockReturnValue([{}])
    }
  }]),
  sirenChildren: jest.fn().mockReturnValue([{}]),
  searchEtablissement: jest.fn().mockReturnValue([{
    baseAdressSiret: {
      'SIRENE': jest.fn().mockReturnValue([{}]),
      'RNA': jest.fn().mockReturnValue([{}])
    },
    baseAdressRNAId: {
      'SIRENE': jest.fn().mockReturnValue([{}]),
      'RNA': jest.fn().mockReturnValue([{}])
    },
    baseAdressSireneSiren: jest.fn().mockReturnValue([{}])
  }]),
  searchFullText: {
    storedFullText: jest.fn().mockReturnValue([{}]),
    storedLastFullText: jest.fn().mockReturnValue([{}]),
    pageNumber: jest.fn().mockReturnValue([{}]),
    baseAdressFullText: {
      'SIRENE': jest.fn().mockReturnValue([{}]),
      'RNA': jest.fn().mockReturnValue([{}])
    }
  },
  suggestions: {
    storedSuggestions: jest.fn().mockReturnValue([{}]),
    baseAdressSuggestions: jest.fn().mockReturnValue([{}]),
    querySuggestions: jest.fn().mockReturnValue([{}]),
    suggestActive: jest.fn().mockReturnValue([{}])
  },
  welcomeText: {
    isWelcomeTextVisible: jest.fn().mockReturnValue([{}])
  }
}

export const getters = {
  RNAAvailable: jest.fn().mockReturnValue([{}]),
  adressToGetFullText: jest.fn().mockReturnValue([{}]),
  allAPIError500: jest.fn().mockReturnValue([{}]),
  allAPINotFound: jest.fn().mockReturnValue([{}]),
  idAssociationFromSirene: jest.fn().mockReturnValue([{}]),
  isEtablissementLoading: jest.fn().mockReturnValue([{}]),
  isWelcomeTextVisible: jest.fn().mockReturnValue([{}]),
  mainSearch: jest.fn().mockReturnValue([{}]),
  numberResultsFullTextRNA: jest.fn().mockReturnValue([{}]),
  numberResultsFullTextSirene: jest.fn().mockReturnValue([{}]),
  optionsToGet: jest.fn().mockReturnValue(["?per_page=5&page=1"]),
  pageNumber: jest.fn().mockReturnValue([{}]),
  pageNumberToGet: jest.fn().mockReturnValue(["?per_page=5&page=1"]),
  queryToGet: jest.fn().mockReturnValue([{}]),
  singlePageEtablissementRNA: jest.fn().mockReturnValue([{}]),
  singlePageEtablissementSirene: jest.fn().mockReturnValue([{}]),
  singleResult: jest.fn().mockReturnValue([{}]),
  sireneAvailable: jest.fn().mockReturnValue([{}]),
  siretFromRNA: jest.fn().mockReturnValue([{}]),
  storedFullText: jest.fn().mockReturnValue([""]),
  storedResultsAssociations: jest.fn().mockReturnValue([{}]),
  storedResultsEntreprises: jest.fn().mockReturnValue([{}]),
  storedSirenChildren: jest.fn().mockReturnValue([{}]),
  storedSirenSiege: jest.fn().mockReturnValue([{}]),
  storedSirenTotalResults: jest.fn().mockReturnValue([{}]),
  storedSpellcheckRNA: jest.fn().mockReturnValue([{}]),
  storedSpellcheckSirene: jest.fn().mockReturnValue([{}]),
  suggestionAdressToGet: jest.fn().mockReturnValue(["http://localhost:3000/v1/suggest/"]),
  totalPageNumberRNA: jest.fn().mockReturnValue([0]),
  totalPageNumberSirene: jest.fn().mockReturnValue([0])
}

export const mutations = {
  // application.js
  setLoading: jest.fn(),
  setError500: jest.fn(),
  setNoResultFound: jest.fn(),
  setMainSearch: jest.fn(),
  // results.js
  setResults: jest.fn(),
  clearResults: jest.fn(),
  setStatus: jest.fn(),
  setSinglePageResults: jest.fn(),
  // resultsSirenChildren.js
  setSirenResults: jest.fn(),
  // searchFullText.js
  setFullText: jest.fn(),
  setLastFullText: jest.fn(),
  setPage: jest.fn(),
  // suggestions.js
  setQuerySuggestions: jest.fn(),
  setStoredSuggestions: jest.fn(),
  // welcomeText.js
  changeWelcomeTextVisibility: jest.fn()
}

export const actions = {
  // application.js
  resetApplicationState: jest.fn(),
  // results.js
  setResponseFullText: jest.fn(),
  setResponseEtablissement: jest.fn(),
  setNegativeResponse: jest.fn(),
  // searchAdditionalInfo.js
  fromRNARequestOtherAPIs: jest.fn(),
  fromSireneRequestOtherAPIs: jest.fn(),
  // searchEtablissement.js
  executeSearchEtablissement: jest.fn(),
  searchEtablissementFromSiret: jest.fn(),
  searchEtablissementFromSiren: jest.fn(),
  searchEtablissementFromIdAssociation: jest.fn(),
  executeSearchBySiret: jest.fn(),
  executeSearchByIdAssociation: jest.fn(),
  executeSearchBySiren: jest.fn(),
  sendAPIRequest: jest.fn(),
  // searchFullText.js
  requestSearchFullText: jest.fn(),
  searchFullText: jest.fn(),
  executeSearchFullText: jest.fn(),
  // suggestions.js
  executeSearchSuggestions: jest.fn(),
  filterAndStoreSuggestions: jest.fn(),
  // welcomeText.js
  hideWelcomeText: jest.fn(),
  goToClearedHomePage: jest.fn()
}

// eslint-disable-next-line no-underscore-dangle
export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockGetters = Object.assign({}, getters, custom.getters)
  const mockMutations = Object.assign({}, mutations, custom.mutations)
  const mockActions = Object.assign({}, actions, custom.actions)
  const mockState = Object.assign({}, state, custom.state)

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState
    })
  }
}

export const store = __createMocks().store