import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/globals/Navbar';
import { useAuth } from '../context/AuthContextProvider';

interface PropsType {
  // children: JSX.Element
}

const MainLayout: React.FC<PropsType> = () => {

  const { userData } = useAuth()

  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className="container flex justify-between items-start gap-8">

        <Outlet />
        <aside className='pt-5'>
          <Link to="/profile" className="text-primary underline">{userData?.name}</Link>
          <p>{userData?.email}</p>
        </aside>
      </section>
    </main>
  );
};

export default MainLayout;