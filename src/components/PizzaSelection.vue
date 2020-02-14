<template>
  <div>
    <PizzaDropdown v-model="selectedPizzaId" :pizzas="pizzas" />
    <h2>Check your Order</h2>
    <PizzaDisplayInformation v-if="selectedPizza" v-bind="selectedPizza" />
  </div>
</template>
<script>
import PizzaDisplayInformation from "@/components/PizzaDisplayInformation";
import PizzaDropdown from "@/components/PizzaDropdown";
export default {
  name: "PizzaSelection",
  components: {
    PizzaDisplayInformation,
    PizzaDropdown
  },
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
