import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to= "users/celebA">CelebA</Link>
        <Link to= "users/celebB">CelebB</Link>
        <Link to= "users/celebC">CelebC</Link>
      </nav>
    )
}
export default Nav