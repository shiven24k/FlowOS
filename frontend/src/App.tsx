import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { LoginForm, SignUpForm } from "./pages/auth";
import { RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth/login",
      element: <LoginForm />,
      children: [
        {
          index: true,
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/signup",
          element: <SignUpForm />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
