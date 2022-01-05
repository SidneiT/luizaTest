<template>
  <section class="default-template">
    <h3 class="default-template-title">{{title}}</h3>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'DefaultTemplate',
  props: {
    title: {
      type: String,
      default: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
.default-template {
  padding: 30px;

  &-title {
    margin-bottom: 30px;
    font-weight: 900;
  }
}
</style>
