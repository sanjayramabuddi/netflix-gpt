import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import router from "./app/router";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
