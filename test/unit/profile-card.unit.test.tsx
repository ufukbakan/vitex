import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import AxiosMock from "axios-mock-adapter";
import { SpyInstance } from "vitest";
import { userService } from "../../src/common/services/UserService";
import Profile from "../../src/pages/profile/[id]";
import * as Router from "../../src/router";
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
        axiosMock.onGet(/\/api\/users\/\d+/).reply(200, UserMock);
        useParamsMock = vi.spyOn(Router, "useParams");
        consoleErrorMock = vi.spyOn(console, "error");
    })

    afterEach(() => {
        fetchUsersMock.mockRestore();
        axiosMock.restore();
        useParamsMock.mockRestore();
        consoleErrorMock.mockRestore();
    });

    test("Path error test", () => {
        consoleErrorMock.mockImplementation(vi.fn(() => {}));
        useParamsMock.mockReturnValueOnce({ id: "x" });

        const container = render(<Profile />);
        expect(container.queryByText("Id is not an integer")).to.be.not.null;
        expect(fetchUsersMock).not.toHaveBeenCalled();
    });

    test("Load user information test", () => {
        useParamsMock.mockReturnValueOnce({ id: "1" });

        const container = render(<Profile />);
        expect(container.queryByText("Loading", { exact: false })).to.be.not.null;
        
        waitFor(() => expect(fetchUsersMock).toHaveBeenCalledOnce(), { timeout: 2000 });
        waitFor(() => expect(container.baseElement.innerHTML.includes("Username")).to.be.true);

    });
});