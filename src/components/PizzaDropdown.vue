<template>
  <div>
    <label for="pizzas">Choose a pizza: </label>
    <select
      :value="value"
      @change="$emit('input', $event.target.value)"
      id="pizzas"
    >
      <option value="" disabled selected>Please select</option>
      <option v-for="pizza in pizzas" :key="pizza.id" :value="pizza.id">
        {{ pizza.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "PizzaDropdown",
  props: {
    pizzas: Array,
    value: String
  }
};
</script>
