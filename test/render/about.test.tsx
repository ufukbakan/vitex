import { render } from "@testing-library/react";
import About from "../../src/pages/about";

test("About page render test", () =>{
    const container = render(<About />);
    
    expect(container.queryByText("About")).to.be.not.null;
    expect(container.queryByText("Ufuk Bakan", { exact: false })).to.be.not.null;
});