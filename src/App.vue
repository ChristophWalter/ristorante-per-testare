<template>
  <div id="app">
    <h1>Ristorante per Testare</h1>
    <PizzaSelection />
  </div>
</template>

<script>
import PizzaSelection from "./components/PizzaSelection.vue";

export default {
  name: "App",
  components: {
    PizzaSelection
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
