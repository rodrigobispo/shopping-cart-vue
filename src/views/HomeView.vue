<template>
  <div class="home">
    <ProductDescriptionDrawer 
      :product="product"
      :active="active.product_drawer"
      @close-product-drawer="closeScrennProductDrawer"
    />

    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items" 
        :key="product.id" 
        :product="product"
        @view-product="viewProduct(product)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ is an alias to /src
import items from '@/data/items';
import ProductSummaryCard from '@/components/products/ProductSummaryCard.vue';
import ProductDescriptionDrawer from '@/components/products/ProductDescriptionDrawer.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductSummaryCard, ProductDescriptionDrawer
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: items as Array<any>,
      product: null,
      active: {
        product_drawer: false
      }
    }
  },
  methods: {
    viewProduct(product): void {
      this.product = product;
      this.active.product_drawer = true;
    },
    closeScrennProductDrawer() {
      this.active.product_drawer = false;
    }
  }
});
</script>

<style lang="scss">

  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
