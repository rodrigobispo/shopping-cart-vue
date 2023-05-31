<template>
  <div class="card">
    <h3>{{ product.title }}</h3>
    <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
    <p class="description">Description: {{ description }}</p>
    <p class="text-muted">{{ product.category }}</p>
    <button class="view-product-button">View</button>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductSummaryCard',
  props: ['product'],
  computed: {
    description() {
      return this.product.description.substring(0,150);
    }
  }
})
</script>


<style lang="scss">

  .card {
    width: 80%;
    margin: 10%;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px gray;

    h5.price {
      color: gray;
    }

    p.description {
      font-size: 0.85rem;
    }

    p.text-muted {
      color: green;
    }

    button.view-product-button {
      padding: 10px;
      background-color: rgb(79, 158, 180);
      border: none;
      color: white;
      font-weight: bold;
      font-size: 1.20rem;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media (min-width: 500px) {
    .card {
      width: 350px;
      margin: 10px;
    }
  }

</style>