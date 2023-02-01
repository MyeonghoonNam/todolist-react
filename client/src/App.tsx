import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const PrivateRoute = lazy(() => import('@components/PrivateRoute'));
const PublicRoute = lazy(() => import('@components/PublicRoute'));

const LoginPage = lazy(() => import('@pages/LoginPage'));
const SignUpPage = lazy(() => import('@pages/SignUpPage'));
const MainPage = lazy(() => import('@pages/MainPage'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
