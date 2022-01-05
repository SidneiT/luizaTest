/* eslint-disable no-debugger */
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Products from '../Products.vue'
import ProductCard from '../../components/ProductCard.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Products.vue', () => {
  let store
  let getters

  beforeEach(() => {
    getters = {
      getProducts: jest.fn(() => [
        {
          id: 0,
          title: 'Camisa Nike Corinthians I',
          price: 229.9,
          currencyId: 'BRL',
          image: 'https://via.placeholder.com/300x300',
          wichList: true
        },
        {
          id: 3,
          title: 'Camisa Feminina Nike Corinthians II',
          price: 199.9,
          currencyId: 'BRL',
          image: 'https://via.placeholder.com/300x300',
          wichList: true
        }
      ])
    }

    store = new Vuex.Store({ getters })
  })

  test('render all products correct', () => {
    const wrapper = shallowMount(Products, {
      localVue,
      store
    })

    const prods = wrapper.findAllComponents(ProductCard)

    expect(prods.exists()).toBe(true)
    expect(prods.length).toBe(getters.getProducts().length)
  })

  test('Call getProducts ', () => {
    shallowMount(Products, {
      localVue,
      store
    })

    expect(getters.getProducts).toHaveBeenCalled()
  })

  // test('renders a link to the item.url with item.title as text', () => {
  //   const item = {
  //     url: 'http://some-url.com',
  //     title: 'some title'
  //   }

  //   const wrapper = shallowMount(Item, { propsData: { item } })
  //   const a = wrapper.find('a')

  //   expect(a.text()).toBe(item.title)
  //   expect(a.attributes('href')).toBe(item.url)
  // })

  // test('render item.author and item.author', () => {
  //   const item = {
  //     author: 'Joseph',
  //     score: 32
  //   }

  //   const wrapper = shallowMount(Item, {
  //     propsData: { item }
  //   })

  //   expect(wrapper.text()).toContain(item.author)
  //   expect(wrapper.text()).toContain(item.score)
  // })
})
