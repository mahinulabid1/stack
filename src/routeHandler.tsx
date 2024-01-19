import { createBrowserRouter } from "react-router-dom";
import SignupPage from '@app/signup/signup.tsx'
import SignInPage from "@app/signin/signIn.tsx";
import UserAdmin from "@app/admin/userAdmin";
import ErrorPage from "./app/errorPage/errorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hello</h1>,
  },
  {
    path : '/signup',
    element : <SignupPage />
  },
  {
    path : '/signin',
    element : <SignInPage />
  },
  {
    path: '/useradmin',
    element: <UserAdmin />
  },
  {
    path: '/error/unwantedSignIn',
    element: <ErrorPage heading="You are not logged in!☹️" redirectingTo="Sign In" route="/signin"/>
  }
]);


export default router;