import HomePage from "../../src/pages/index";
import { renderWithProviders } from "../helpers";

test("Home page render test", () => {
    const container = renderWithProviders(<HomePage />);
    expect(container.queryByText("Home page")).to.be.not.null;
})