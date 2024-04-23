import { NavLink } from "react-router-dom";

type NavItemType = {
  label: string,
  link: string
}

const DashboardNavbar = () => {

  const navData: NavItemType[] = [
    {
      label: "Post",
      link: "/dashboard/post"
    },
    {
      label: "Comment",
      link: "/dashboard/comment"
    },
  ]

  return (
    <nav className="dashboard-nav">
      <ul>
        {
          navData.map((navItem: NavItemType, i: number) => {
            return (
              <li key={i}>
                <NavLink to={navItem?.link} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "nav-active" : ""
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

export default DashboardNavbar;