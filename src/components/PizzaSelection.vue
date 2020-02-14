<template>
  <div>
    <label for="pizzas">Choose a pizza: </label>
    <select v-model="selectedPizzaId" id="pizzas">
      <option value="" disabled selected>Please select</option>
      <option v-for="pizza in pizzas" :key="pizza.id" :value="pizza.id">
        {{ pizza.name }}
      </option>
    </select>
    <h2>Check your Order</h2>
    <div v-if="selectedPizza">
      You selected a Pizza {{ selectedPizza.name }} with
      <template v-for="(topping, index) in selectedPizza.toppings">
        {{ topping
        }}<template v-if="index !== selectedPizza.toppings.length - 1"
          >,</template
        >
      </template>
      for {{ selectedPizza.price }} €.
    </div>
  </div>
</template>
<script>
export default {
  name: "PizzaSelection",
  data() {
    return {
      selectedPizzaId: "",
      pizzas: [
        { id: "funghi", name: "Funghi", toppings: ["Champignons"], price: 6 },
        {
          id: "margherita",
          name: "Margherita",
          toppings: ["a little bit of nothing"],
          price: 5
        },
        {
          id: "vegetariana",
          name: "Vegetariana",
          toppings: ["Champignons", "Pepper", "Vegetables of the day"],
          price: 7
        },
        {
          id: "hawaii",
          name: "Hawaii",
          toppings: ["Ham", "Pineapple"],
          price: 7
        }
      ]
    };
  },
  computed: {
    selectedPizza() {
      return this.pizzas.find(pizza => pizza.id === this.selectedPizzaId);
    }
  }
};
</script>
