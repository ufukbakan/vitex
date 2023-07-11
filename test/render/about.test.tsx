import About from "../../src/pages/about";
import { renderWithProviders } from "../helpers";

test("About page render test", () =>{
    const container = renderWithProviders(<About />);
    
    expect(container.queryByText("About")).to.be.not.null;
    expect(container.queryByText("Ufuk Bakan", { exact: false })).to.be.not.null;
});