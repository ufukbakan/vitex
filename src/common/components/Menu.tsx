import { Link } from "react-router-dom"

export default function(){
    return (
        <div style={{
            display: "flex",
            gap: "2rem"
        }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile/1">Profile</Link>
        </div>
    )
}