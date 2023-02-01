import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PublicRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return <Outlet />;
};

export default PublicRoute;
