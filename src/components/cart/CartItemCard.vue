<template>
<div class="cart-item-card">
  <div class="header">
    <h3>{{ product.title }}</h3>
    <h4>Unit Price $ {{ product.price }}</h4>
    <h4>Qtd {{ product.quantity }}</h4>
    <h4>Total Cost {{ itemCost }}</h4>
  </div>

  <p>{{ description }}</p>
</div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import IProduct from '@/data/IProduct'

export default defineComponent({
  name: 'CartItemCard',
  
  // props: ['product'],
  props: {
    product: Object as PropType<IProduct>
  },

  computed: {
    itemCost() {
      return (this.product.quantity * this.product.price).toFixed(2)
    },
    description() {
      return this.product.description.substring(0.100)
    }
  }
})
</script>

<style lang="scss">
.cart-item-card {
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 11px;
  text-align: left;

  .header {
    display: flex;
    justify-content: space-around;
  }
}
</style>