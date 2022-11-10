import { RootState } from '@store/.';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
	const { isAuth } = useSelector((state: RootState) => state.users);

	return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
