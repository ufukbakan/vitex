import ProfileCard from "../../src/pages/profile/_components/ProfileCard";
import { renderWithProviders } from "../helpers";
import UserMock from "../mock-data/UserMock";

test("Profile Card render test", () => {
    const container = renderWithProviders(<ProfileCard user={UserMock} />);

    const textsExpected = [
        UserMock.id,
        UserMock.name,
        UserMock.username,
        UserMock.company.name,
        UserMock.address.city
    ];
    for(let i = 0; i < textsExpected.length; i++){
        const searchText = textsExpected[i];
        expect(container.queryByText(searchText, { exact: true })).to.be.not.null;
    }
})