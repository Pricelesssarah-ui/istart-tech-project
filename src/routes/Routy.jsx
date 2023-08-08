import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
  } from "react-router-dom";
  import Login from "../components/login";
  import Signup from "../components/signup";
  import Dashboard from "../components/dashboard";


  const Routy = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
        </>

      )
    )
      return (
        <div>
          <RouterProvider router={router} />
        </div>
      );
  }   


export default Routy;  