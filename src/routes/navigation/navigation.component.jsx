import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as Shoplogo } from "../../asset/Simple-Isometric-Store.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shoplogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
