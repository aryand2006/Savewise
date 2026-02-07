import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        <Outlet />
      </main>
    </div>
  );
};
