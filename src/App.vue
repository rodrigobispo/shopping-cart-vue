<template>
  <nav>
    <router-link :class="{ active: $route.name === 'HomeView' }" :to="{ name: 'HomeView' }">
      Products
    </router-link>
    <router-link :class="{ active: $route.name === 'CartView' }" :to="{ name: 'CartView' }">
      <CartDisplayMenu />
    </router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from '@/store';
import CartDisplayMenu from './components/cart/CartDisplayMenu.vue';

export default defineComponent({
  components: {
    CartDisplayMenu
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.commit('updateCartFromLocalStorage')
    })
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background-color: rgb(247, 247, 247);
}

nav {
  padding: 10px;
  width: 100%;
  height: 40px;
  background-color: white;
  line-height: 30px;

  a {
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;

    &.active {
      color: #2c3e50;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
