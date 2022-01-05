<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }" class="logo"> MagaNets </router-link>
    <nav>
      <ul>
        <li>
          <a href="#">
            <span class="material-icons">location_on</span>
            Cidade: São Paulo
          </a>
        </li>
        <li>
          <a href="#">
            <span class="material-icons">local_phone</span>
            Central de atendimento
          </a>
        </li>
        <li>
          <router-link :to="{ name: 'wichlist' }">
            <span class="material-icons">favorite</span>
            Lista de desejos
          </router-link>
        </li>
      </ul>
      <InputSearch />
    </nav>
  </header>
</template>

<script>
import InputSearch from './InputSearch.vue'

export default {
  name: 'Header',
  components: {
    InputSearch
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-weight: bold;
  background-color: #5a2d82;
  padding: 30px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a.logo {
    text-decoration: none;
    font-size: 26px;
    color: white;
  }

  nav {
    flex: 1 1 auto;
    margin-left: 85px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    a {
      color: white;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 8px 0 16px 0;
    }

    .material-icons {
      color: white;
      font-size: 16px;
      float: left;
      margin: 0 10px 0 0;
    }
  }

  @media only screen and (max-width: 890px) {
    nav {
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
}
</style>
