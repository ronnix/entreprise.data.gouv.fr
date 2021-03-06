import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import { __createMocks as createStoreMocks } from '@/store/index.js'
import Vuex from 'vuex'
import LegalNotes from '@/components/LegalNotes'

const localVue = createLocalVue()
localVue.use(Vuex)
jest.mock('@/store/index.js')

describe('LegalNotes.vue', () => {
  let storeMocks
  let wrapperLegalNotes

  test('It dispatches hideWelcomeText when created', () => {
    storeMocks = createStoreMocks()
    wrapperLegalNotes = shallowMount(LegalNotes, {
      localVue,
      store: storeMocks.store
    })
    wrapperLegalNotes
    expect(storeMocks.actions.hideWelcomeText).toHaveBeenCalled()
  })
})

describe('LegalNotes.vue snapshot testing', () => {
  const storeMocks = createStoreMocks()
  const wrapperLegalNotes = mount(LegalNotes, {
    localVue,
    store: storeMocks.store
  })

  test('It matches the snapshot', () => {
    expect(wrapperLegalNotes.vm.$el).toMatchSnapshot()
  })
})
