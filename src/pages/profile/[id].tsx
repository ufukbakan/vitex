import { useEffect, useState } from "react";
import { useParams } from "../../router";
import { User, userService } from "../../common/services/UserService";
import ProfileCard from "./_components/ProfileCard";

export default function () {
    const userIdInPath = useParams("/profile/:id").id;
    const id = Number(userIdInPath);

    const [error, setError] = useState<string>();
    const [userInfo, setUserInfo] = useState<User>();

    useEffect(() => {

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

    return render();

}