<template>
  <div class="input-search">
    <span class="material-icons">search</span>
    <input type="text" name="search" id="search" placeholder="Busca" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.input-search {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border-radius: 5px;
  height: 45px;
  background-color: white;

  span {
    position: absolute;
    font-weight: 900;
    position: relative;
    color: #5f5f5f;
    margin: auto 15px;
  }

  input {
    border: none;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    font-weight: bold;
    font-size: 15px;
    color: #a5a5a5;
    padding-right: 10px;
  }
}
</style>
