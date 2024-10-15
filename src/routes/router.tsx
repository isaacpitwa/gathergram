import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import SignUpPage from "../pages/SignUp";
import { ROUTES } from ".";

/**
 * AppRouter component sets up the main application routes using React Router.
 * 
 * Routes:
 * - Home: Renders the HomePage component at the root path.
 * - Login: Renders the LoginPage component at the login path.
 * - SignUp: Renders the SignUpPage component at the signup path.
 * - Fallback: Redirects any unknown paths to the root path.
 * 
 * @returns {JSX.Element} The configured routes for the application.
 */
const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} index />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
