import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Loader from '../Loader';

const Layout = () => {
  return (
    <>
      <Header />

      <div className='container'>
        <main className='main'>
          <Suspense fallback={ <Loader /> }>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;
