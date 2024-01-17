import { createBrowserRouter } from "react-router-dom";
import SignupPage from './signup/signup.tsx'

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