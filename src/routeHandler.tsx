import { createBrowserRouter } from "react-router-dom";
import SignupPage from './app/signup/signup.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path : '/signup',
    element : <SignupPage />
  }
]);


export default router;