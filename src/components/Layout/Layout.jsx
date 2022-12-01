import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div style={{margin: '0 auto'}}>
    <AppBar />
    <Suspense fallback={<div>Loading page...</div>}>
    <Outlet />
    </Suspense>
    </div>
  );
};

export default Layout;