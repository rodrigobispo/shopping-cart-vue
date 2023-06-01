<template>
  <div class="pay-card">
    <div class="header">
      <h3>Cart Total: $ {{ cartTotal }}</h3>
      <button class="pay-view-product-button">Pay By Credit Card</button>
    </div>
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
      return store.getters.cartTotal.toFixed(2)
      // return this.products.reduce((total, product) =>
      //     total + (product.quantity * product.price), 0);
    }
  }
})
</script>

<style lang="scss">
.pay-card {
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 11px;
  text-align: left;

  .header {
    display: flex;
    justify-content: space-between;
  }

  button.pay-view-product-button {
    padding: 10px;
    background-color: rgb(250, 239, 142);
    border: none;
    color: black;
    font-weight: bolder;
    font-size: 1.15rem;
    border-radius: 5px;
    opacity: .70;
    cursor: pointer;
  }
}
</style>