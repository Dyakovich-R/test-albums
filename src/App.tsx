import { NavLink, Link, Outlet } from 'react-router-dom';
import classNames from 'classnames';
const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { isActive: isActive });

export const App = () => {
  return (
    <>
      <nav className="navbar is-light px-3">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
          >
            <img
              src="/logo.png"
              alt="MA"
              className="logo"
            />
          </Link>

          <NavLink
            to="/"
            className={getLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/users"
            className={getLinkClass}
          >
            Users
          </NavLink>

          <NavLink
            to="/posts"
            className={getLinkClass}
          >
            Posts
          </NavLink>
          
          <NavLink
            to="/albums"
            className={getLinkClass}
          >
            Albums
          </NavLink>

        
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
