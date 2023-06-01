<template>
  <div>
    <h1>Your Cart</h1>

    <CartItemCard 
      v-for="(product, index) in products" 
      :key="index" 
      :product="product">
    </CartItemCard>

    <CartSummaryPaymentCard :products="products"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';
import CartItemCard from '@/components/cart/CartItemCard.vue';
import CartSummaryPaymentCard from '@/components/cart/CartSummaryPaymentCard.vue'

export default defineComponent({
  name: 'CartView',
  components: { CartItemCard, CartSummaryPaymentCard },
  computed: {
    products() {
      return store.getters.cartItems
    }
  },

})
</script>