import { Link } from "react-router-dom";
import "./header.scss"

export  const Header = () => {
  return (
    <header>
      <nav className="">
        <ul className="list" >
          <li className="">
            <Link to="/">home</Link>
          </li>
          <li className="">
            <Link to="/about">about</Link>
          </li>
          <li className="">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>      
    </header>
  );
};

