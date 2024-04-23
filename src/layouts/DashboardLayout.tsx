import { Outlet, useLocation } from 'react-router-dom';
import DashboardNavbar from '../components/globals/DashboardNavbar';
import { useDashboard } from '../context/DashboardContextProvider';
import useGetData from '../hooks/useGetData';
import Select from '../components/common/Select';


const DashboardLayout = () => {

  const { pathname } = useLocation();
  const { setSelectedUserId } = useDashboard()
  const { data: usersData } = useGetData("users")
  const { data: postsData } = useGetData("posts")

  return (

    <main className='w-full'>
      <header>
        <DashboardNavbar />
      </header>

      <section className='flex justify-between items-center py-10'>
        <h1 className="text-3xl font-bold text-secondary">
          {
            pathname === "/dashboard/post" ? "Post" : pathname === "/dashboard/comment" ? "Comment" : ""
          }
        </h1>

        {
          pathname === "/dashboard/post" &&
          <Select data={usersData} setId={setSelectedUserId} valueKey="id" optionKey="name" />
        }
        {
          pathname === "/dashboard/comment" &&
          <Select data={postsData} setId={setSelectedUserId} valueKey="id" optionKey="title" />
        }

      </section>

      <Outlet />
    </main>
  );
};

export default DashboardLayout;