import { fireEvent } from "@testing-library/react";
import Menu from "../../src/common/components/Menu";
import { renderWithRouter } from "../helpers";

describe("Menu unit test", () => {

    test("Home link test", () => {
        const container = renderWithRouter(<Menu />);
        const homeLink = container.queryByText("Home")!;
        expect(homeLink).to.be.not.null;
        fireEvent.click(homeLink);
        expect(globalThis.location.pathname).to.be.eq("/");
    });

    test("About link test", () => {
        const container = renderWithRouter(<Menu />);
        const aboutLink = container.queryByText("About")!;
        expect(aboutLink).to.be.not.null;
        fireEvent.click(aboutLink);
        expect(globalThis.location.pathname).to.be.eq("/about");
    });

    test("Profile link test", () => {
        const container = renderWithRouter(<Menu />);
        const profileLink = container.queryByText("Profile")!;
        expect(profileLink).to.be.not.null;
        fireEvent.click(profileLink);
        expect(globalThis.location.pathname).to.be.eq("/profile/1");
    });

});