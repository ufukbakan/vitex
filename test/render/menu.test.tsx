import Menu from "../../src/common/components/Menu";
import { renderWithProviders } from "../helpers";

test("Menu render test", () => {
    const container = renderWithProviders(<Menu />);

    expect(container.queryByText("Home")).to.be.not.null;
    expect(container.queryByText("About")).to.be.not.null;
    expect(container.queryByText("Profile")).to.be.not.null;
})