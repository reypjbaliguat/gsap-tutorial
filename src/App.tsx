import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./components/routes";
import { HomePage } from "./pages/Home";
import { StaggerPage } from "./pages/Stagger";

function App() {
  const publicRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/stagger",
      element: <StaggerPage />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
