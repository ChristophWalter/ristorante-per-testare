<template>
  <div>
    You selected a Pizza {{ name }} with
    <template v-for="(topping, index) in toppings">
      {{ topping }}<template v-if="index !== toppings.length - 1">,</template>
    </template>
    for {{ price }} €.
  </div>
</template>
<script>
export default {
  name: "PizzaDisplayInformation",
  props: {
    name: String,
    toppings: Array,
    price: Number
  }
};
</script>
