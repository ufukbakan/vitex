import { useRecoilState } from "recoil"
import { globalInput } from "../common/atoms/userPreferences.atom"

export default function () {
    const [value, setValue] = useRecoilState(globalInput);

    return (
        <>
            <h1>Home page</h1>
            <label>
                <span>Enter a recoil state:</span>
                <input value={value} onChange={e => setValue(e.target.value)} />
            </label>
        </>
    )
}