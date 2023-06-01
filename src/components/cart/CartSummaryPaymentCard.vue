<template>
  <div class="cart-item-card">
    <h3>Cart Total: $ {{ cartTotal }}</h3>
    <button class="pay-view-product-button">Pay By Credit Card</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';

export default defineComponent({
  name: 'CartSummaryPaymentCard',
  props: {
    products: { 
      type: [],
      required: true
    }
  },
  computed: {
    cartTotal() {
      return store.getters.cartTotal
      // return this.products.reduce((total, product) =>
      //     total + (product.quantity * product.price), 0);
    }
  }
})
</script>

<style lang="scss">
</style>