import { render, fireEvent } from "@testing-library/vue";
import PizzaSelection from "@/components/PizzaSelection";

it("should show the selected pizza information", async () => {
  const { getByText, getByDisplayValue, queryByText } = render(PizzaSelection);

  const pizzaInformation =
    "You selected a Pizza Funghi with Champignons for 6 €.";
  expect(queryByText(pizzaInformation)).toBeNull();

  const pizzaSelection = getByDisplayValue("Please select");
  await fireEvent.update(pizzaSelection, "funghi");
  getByText(pizzaInformation);
});
