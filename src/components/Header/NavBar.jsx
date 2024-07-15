import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex px-4 justify-around bg-gray-900 text-white">
      <Link to={"/"} className="p-4 hover:bg-gray-700 hover:text-gray-200">Home</Link>
      <Link to={"/about"} className="p-4 hover:bg-gray-700 hover:text-gray-200">Sobre Nosotros</Link>
    </nav>
  );
}

export default NavBar;
