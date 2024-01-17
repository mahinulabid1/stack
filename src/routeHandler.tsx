import { createBrowserRouter } from "react-router-dom";
import SignupPage from '@app/signup/signup.tsx'
import SignInPage from "@app/signin/signIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path : '/signup',
    element : <SignupPage />
  },
  {
    path : '/signin',
    element : <SignInPage />
  },
]);


export default router;