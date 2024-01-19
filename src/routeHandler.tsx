import { createBrowserRouter } from "react-router-dom";
import SignupPage from '@app/signup/signup.tsx'
import SignInPage from "@app/signin/signIn.tsx";
import UserAdmin from "@app/admin/userAdmin";


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
  }
]);


export default router;