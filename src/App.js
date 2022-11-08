import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Router/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
