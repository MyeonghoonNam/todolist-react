import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const PrivateRoute = lazy(() => import('@components/PrivateRoute'));
// const PublicRoute = lazy(() => import('@components/PublicRoute'));

const LoginPage = lazy(() => import('@pages/LoginPage'));
const SignUpPage = lazy(() => import('@pages/SignUpPage'));
const MainPage = lazy(() => import('@pages/MainPage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<MainPage />} />
        {/* <Route element={<PublicRoute />} />

				<Route element={<PrivateRoute />} /> */}
      </Routes>
    </Suspense>
  );
};

export default App;
