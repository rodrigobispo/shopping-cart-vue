<template>
  <span v-if="displayTotal > 0">
    Cart ({{ totalQuantity }}{{ item }}) $ {{ displayTotal }}
  </span>
  <span v-else>
    Cart
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';

export default defineComponent({
  name: 'CartDisplayMenu',
  computed: {
    totalQuantity() {
      return store.getters.cartTotalQuantityItems
    },
    displayTotal() {
      return store.getters.cartTotal.toFixed(2)
    },
    item() {
      return this.totalQuantity > 1 ? ' items' : ' item'
    }
  }
})
</script>

