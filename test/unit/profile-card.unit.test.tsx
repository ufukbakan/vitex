import { waitFor } from "@testing-library/react";
import axios from "axios";
import AxiosMock from "axios-mock-adapter";
import { SpyInstance } from "vitest";
import { userService } from "../../src/common/services/UserService";
import Profile from "../../src/pages/profile/[id]";
import * as Router from "../../src/router";
import { renderWithProviders } from "../helpers";
import UserMock from "../mock-data/UserMock";

describe("Profile card unit test", () => {

    let axiosMock: AxiosMock;
    let fetchUsersMock: SpyInstance;
    let useParamsMock: SpyInstance;
    let consoleErrorMock: SpyInstance;

    beforeAll(() => {
        axiosMock = new AxiosMock(axios);
    });

    beforeEach(() => {
        fetchUsersMock = vi.spyOn(userService, "fetchUserById");
        useParamsMock = vi.spyOn(Router, "useParams");
        consoleErrorMock = vi.spyOn(console, "error");
    })

    afterEach(() => {
        axiosMock.reset();
        fetchUsersMock.mockRestore();
        useParamsMock.mockRestore();
        consoleErrorMock.mockRestore();
    });

    test("Path error test", () => {
        consoleErrorMock.mockImplementation(vi.fn(() => { }));
        useParamsMock.mockReturnValue({ id: "x" });

        const container = renderWithProviders(<Profile />);
        expect(container.queryByText("Id is not an integer")).to.be.not.null;
        expect(fetchUsersMock).not.toHaveBeenCalled();
    });

    test("Load user information test", async () => {
        useParamsMock.mockReturnValue({ id: "1" });
        axiosMock.onGet("/api/users/1").reply(200, UserMock);

        const container = renderWithProviders(<Profile />);
        const loadingDiv = container.queryByText("Loading", { exact: false });
        expect(loadingDiv).to.be.not.null;

        await waitFor(() => expect(fetchUsersMock).toHaveBeenCalledOnce(), { timeout: 2000 });

        expect(container.queryByText(UserMock.id)).to.be.not.null;
        expect(container.queryByText(UserMock.name)).to.be.not.null;
        expect(container.queryByText(UserMock.username)).to.be.not.null;
        expect(container.queryByText(UserMock.company.name)).to.be.not.null;
        expect(container.queryByText(UserMock.address.city)).to.be.not.null;
    });
});