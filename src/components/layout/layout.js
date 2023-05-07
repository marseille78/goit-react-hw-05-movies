import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header';
import Loader from '../loader';

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
