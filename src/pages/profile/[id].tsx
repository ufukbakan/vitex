import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { globalInput } from "../../common/atoms/SessionPreferences.atom";
import { User, userService } from "../../common/services/UserService";
import { useParams } from "../../router";
import ProfileCard from "./_components/ProfileCard";

export default function () {
    const userIdInPath = useParams("/profile/:id").id;
    const id = Number(userIdInPath);

    const [error, setError] = useState<string>();
    const [userInfo, setUserInfo] = useState<User>();
    const recoilValue = useRecoilValue(globalInput);

    useEffect(() => {
        if(userInfo){
            setUserInfo(undefined);
        }
        if (Number.isInteger(id)) {
            userService.fetchUserById(id).then(setUserInfo).catch(e => setError(e.message));
        } else {
            setError("Id is not an integer");
        }

    }, [userIdInPath]);


    function render() {
        const result = error || userInfo && <ProfileCard user={userInfo} />;
        return result || <div>Loading...</div>;
    }

    return (
        <>
            <p>Your recoil state is {recoilValue}</p>
            {render()}
        </>
    )

}