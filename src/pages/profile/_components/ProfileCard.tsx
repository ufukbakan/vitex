import { Link } from "react-router-dom";
import { User } from "../../../common/services/UserService"
import "./ProfileCard.scss";

type ProfileCardProps = {
    user: User
}

export default function (props: ProfileCardProps) {
    const user = props.user;
    return (
        <>

            <table>
                <tbody>
                    <tr><td>ID</td><td>{user.id}</td></tr>
                    <tr><td>Name</td><td>{user.name}</td></tr>
                    <tr><td>Username</td><td>{user.username}</td></tr>
                    <tr><td>Company</td><td>{user.company.name}</td></tr>
                    <tr><td>City</td><td>{user.address.city}</td></tr>
                </tbody>
            </table>

            <Link to={`/profile/${user.id+1}`}>Next</Link>
        </>
    )
}