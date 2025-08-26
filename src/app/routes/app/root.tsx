import { Toaster } from '@/components/ui/sonner';
import { Outlet } from 'react-router';


export const ErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

const AppRoot = () => {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};

export default AppRoot;