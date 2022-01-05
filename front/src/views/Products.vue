<template>
  <DefaultTemplate>
    <ul>
      <li v-for="prod in getProducts" :key="prod.sku">
        <ProductCard
          :img="prod.image"
          :title="prod.title"
          :productId="prod.id"
          :price="prod.price"
          :currency="prod.currencyId"
          :wichList="prod.wichList"
          :wichListOptions="['flag-favorite']"
        />
      </li>
    </ul>
  </DefaultTemplate>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import DefaultTemplate from '../components/DefaultTemplate.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Products',
  components: {
    ProductCard,
    DefaultTemplate
  },
  computed: {
    ...mapGetters(['getProducts'])
  }
}
</script>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    li {
      margin-bottom: 20px;
    }
  }
</style>
