<template>
  <button v-on="$listeners" type="button" class="product-wichlist-button" title="Lista de Desejos">
    <span :class="['material-icons', {'red': selected}]">
      favorite
    </span>
  </button>
</template>

<script>
export default {
  name: 'WichiListButton',
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.product-wichlist-button {
  position: absolute;
  top: -3px;
  left: 4px;
  background-color: black;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }

  span{
    transition: color 0.2s linear;

    &.material-icons{
      color: white;
      margin-top: 10px;
    }

    &.red {
      color: #d52222;
    }
  }

  &::after {
    position: inherit;
    left: 2px;
    top: 40px;
    content: "";
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-top: 10px solid black;
    border-bottom-left-radius: 50%;
  }
}
</style>
