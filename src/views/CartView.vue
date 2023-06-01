<template>
  <div>
    <h1>Your Cart</h1>

    <CartItemCard/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartView'
})
</script>