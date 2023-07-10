import { User } from "../../../common/services/UserService"
import { Link } from "../../../router";
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

            <Link to="/profile/:id" params={{ id: (user.id + 1).toString() }}>Next</Link>
        </>
    )
}