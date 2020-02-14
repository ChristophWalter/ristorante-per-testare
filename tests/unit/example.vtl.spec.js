import { render } from "@testing-library/vue";
import HelloWorld from "@/components/HelloWorld.vue";

test("renders hello world", async () => {
  const { getByText } = render(HelloWorld, {
    props: { msg: "Hello Vue Testing Library" }
  });

  getByText("Hello Vue Testing Library");
});
