<template>
  <div class="home">

    <div class="product-cards-container">
      <ProductSummaryCard v-for="product in items" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ is an alias to /src
import items from '@/data/items';
import ProductSummaryCard from '@/components/products/ProductSummaryCard.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductSummaryCard
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: items as Array<any>
    }
  },
});
</script>

<style lang="scss">

  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
