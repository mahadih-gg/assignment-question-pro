import { NavLink, useLocation } from "react-router-dom";

type NavItemType = {
  label: string,
  link: string
}

const Navbar = () => {

  const navData: NavItemType[] = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Dashboard",
      link: "/dashboard/post"
    },
    {
      label: "My Component",
      link: "/my-component"
    },
  ]

  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <ul>
        {
          navData.map((navItem: NavItemType, i: number) => {
            return (
              <li key={i}>
                <NavLink to={navItem?.link} className={({ isActive, isPending, }) =>
                  isPending ? "pending" : isActive ? "nav-active" : navItem?.link.includes("dashboard") && pathname.includes("dashboard") ? "nav-active" : ""
                }>
                  {navItem?.label}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar;