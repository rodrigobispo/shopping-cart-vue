<template>
  <span v-if="displayTotal > 0">
    Cart ({{ totalQuantity }}{{ labelItem }}) $ {{ displayTotal }}
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
    labelItem() {
      if (this.totalQuantity) {
        if (this.totalQuantity > 1) {
          return ' items';
        } 
      }
      return ' item';
    }
  }
})
</script>

