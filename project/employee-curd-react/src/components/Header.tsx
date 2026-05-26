import { BiSolidFactory } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark bg-info text-white">
            <Link to="/" className="navbar-brand px-3 d-flex aligin-items-center">
              <BiSolidFactory size={25} className="m-2" />
              Employee Management
            </Link>
        </nav>
    </>
  )
}
