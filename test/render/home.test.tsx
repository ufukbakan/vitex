import { render } from "@testing-library/react";
import HomePage from "../../src/pages/index";

test("Home page render test", () => {
    const container = render(<HomePage />);
    expect(container.queryByText("Home page")).to.be.not.null;
})