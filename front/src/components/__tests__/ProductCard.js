/* eslint-disable no-debugger */
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import ProductCard from '../../components/ProductCard.vue'
import WichListButton from '../../components/WichListButton.vue'
import RemoveButton from '../../components/RemoveButton.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const propsData = {
  productId: 0,
  title: 'Camisa Nike Corinthians I',
  price: 229.9,
  currency: 'BRL',
  img: 'https://via.placeholder.com/300x300',
  wichList: true,
  wichListOptions: ['flag-favorite']
}

describe('ProductCard.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      removeFromWichList: jest.fn(() => {})
    }

    store = new Vuex.Store({ actions })
  })

  test('renders correctly', () => {
    const wrapper = shallowMount(ProductCard, { propsData })

    expect(wrapper.element).toMatchSnapshot()
  })

  test('contains wichlist button', () => {
    const wrapper = shallowMount(ProductCard, { propsData })

    const btn = wrapper.findComponent(WichListButton)
    const btnRemove = wrapper.findComponent(RemoveButton)

    expect(btn.exists()).toBe(true)
    expect(btnRemove.exists()).toBe(false)
  })

  test('Button remove call remove action on click', async () => {
    propsData.wichListOptions = ['circle-remove']

    const wrapper = shallowMount(ProductCard, {
      propsData,
      localVue,
      store
    })

    const btn = wrapper.findComponent(RemoveButton)

    expect(btn.exists()).toBe(true)

    btn.vm.$emit('click')

    expect(actions.removeFromWichList).toHaveBeenCalled()
  })
})
