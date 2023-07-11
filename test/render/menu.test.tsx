import Menu from "../../src/common/components/Menu";
import { renderWithRouter } from "../helpers";

test("Menu render test", () => {
    const container = renderWithRouter(<Menu />);

    expect(container.queryByText("Home")).to.be.not.null;
    expect(container.queryByText("About")).to.be.not.null;
    expect(container.queryByText("Profile")).to.be.not.null;
})