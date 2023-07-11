import { useRecoilValue } from "recoil";
import AboutInfo from "./_components/AboutInfo";
import { globalInput } from "../../common/atoms/SessionPreferences.atom";

export default function () {

    const value = useRecoilValue(globalInput);

    return (
        <>
            <h1>About</h1>
            
            <AboutInfo />

            <label>
                <span>Your readonly recoil state:</span>
                <input disabled readOnly value={value} />
            </label>
        </>
    )
}