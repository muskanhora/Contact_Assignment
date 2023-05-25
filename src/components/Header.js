import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className="bg-yellow-100">
        <nav>
            <ul className="flex justify-center align-middle">
                <Link to="/"> <li className="font-bold  p-2 m-2">Contact</li> </Link>
                <Link to="/map"><li className="font-bold  p-2 m-2">Charts and Maps</li></Link>
            </ul>
        </nav>
        </div>
    )
}
export default Header;