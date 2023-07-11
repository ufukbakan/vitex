import { useRecoilValue } from "recoil";
import AboutInfo from "./_components/AboutInfo";
import { globalInput } from "../../common/atoms/userPreferences.atom";

export default function () {

    const value = useRecoilValue(globalInput);

    return (
        <>
            <h1>About</h1>
            
            <AboutInfo />

            <label>
                <span>Your recoil state:</span>
                <input disabled readOnly value={value} />
            </label>
        </>
    )
}