<template>
  <DefaultTemplate title="Home > Lista de desejos">
    <ul>
      <li v-for="prod in getWichList" :key="prod.sku">
        <ProductCard
          :img="prod.image"
          :title="prod.title"
          :productId="prod.id"
          :price="prod.price"
          :currency="prod.currencyId"
          :wichList="prod.wichList"
          :wichListOptions="['circle-remove']"
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
  name: 'WichList',
  components: {
    ProductCard,
    DefaultTemplate
  },
  computed: {
    ...mapGetters(['getWichList'])
  }
}
</script>

<style lang="scss">
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      margin-bottom: 20px;
    }
  }
</style>
