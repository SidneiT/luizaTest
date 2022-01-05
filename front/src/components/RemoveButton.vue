<template>
  <button v-on="$listeners" type="button" class="remove-button" title="Lista de Desejos">
    <span :class="['material-icons', {'red': selected}]">
      highlight_off
    </span>
  </button>
</template>

<script>
export default {
  name: 'RemoveButton',
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.remove-button {
  position: absolute;
  top: 4px;
  right: 3px;
  color: black;
  border: none;
  background-color: transparent;
  outline: none;

  span.material-icons {
    font-size: 34px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
