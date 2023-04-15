import { Fragment } from "react";
import HeaderButton from "./HeaderButton";
import HeaderSearch from "./HeaderSearch";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <header className="headerr">
        <Link to="/">
          {" "}
          <h1> The foodie Zone - Ordering App </h1>
        </Link>
        <HeaderSearch />
        <HeaderButton />
      </header>
      <div className="main-image">
        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </Fragment>
  );
};
export default Header;
