<template>
  <div class="product-card">
    <img :src="img" :alt="title" />
    <span class="product-card__title">{{title}}</span>
    <span class="product-card__price">{{priceFormated}}</span>
    <WichListButton v-if="showWichListButton" :selected="wichList" @click="toggleWichList"/>
    <RemoveButton v-if="showRemoveButton" @click="removeFromWichList(productId)"/>
  </div>
</template>

<script>
import WichListButton from '../components/WichListButton.vue'
import RemoveButton from '../components/RemoveButton.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ProductCard',
  components: {
    WichListButton,
    RemoveButton
  },
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    productId: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    wichList: {
      type: Boolean,
      default: undefined
    },
    wichListOptions: {
      type: Array,
      validator: values => {
        const options = ['flag-favorite', 'circle-remove']

        const invalid = values.filter(v => !options.includes(v))

        return !invalid.length
      }
    }
  },
  computed: {
    priceFormated () {
      return this.price.toLocaleString(this.currency, {
        style: 'currency',
        currency: this.currency
      })
    },
    showWichListButton () {
      return this.wichListOptions.includes('flag-favorite')
    },
    showRemoveButton () {
      return this.wichListOptions.includes('circle-remove')
    }
  },
  methods: {
    ...mapActions(['addToWichList', 'removeFromWichList']),
    toggleWichList () {
      this.wichList
        ? this.removeFromWichList(this.productId)
        : this.addToWichList(this.productId)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 5px;

  img {
    max-width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &__title {
    font-weight: bold;
    padding: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width:calc(100% - 30px);
  }

  &__price {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    color: #f4d957;
    font-weight: bold;
  }
}
</style>
