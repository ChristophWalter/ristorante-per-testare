import { render, fireEvent } from "@testing-library/vue";
import PizzaSelection from "@/components/PizzaSelection";

it.each`
  selection        | pizzaInformation
  ${"funghi"}      | ${"You selected a Pizza Funghi with Champignons for 6 €."}
  ${"vegetariana"} | ${"You selected a Pizza Vegetariana with Champignons, Pepper, Vegetables of the day for 7 €."}
`(
  "should show pizza information when selecting $selection",
  async ({ selection, pizzaInformation }) => {
    const { getByText, getByDisplayValue, queryByText } = render(
      PizzaSelection
    );
    expect(queryByText(pizzaInformation)).toBeNull();

    const pizzaSelection = getByDisplayValue("Please select");
    await fireEvent.update(pizzaSelection, selection);
    getByText(pizzaInformation);
  }
);
