import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '@queries/index';

const PrivateRoute = () => {
  const {
    query: { data: user, isLoading, refetch },
  } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else if (!user) {
      refetch();
    }
  }, [user, refetch, navigate]);

  if (isLoading) {
    return null;
  }

  return <Outlet />;
};

export default PrivateRoute;
