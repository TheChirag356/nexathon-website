import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainPage, ProblemStatementsPage, Register, ErrorPage } from "./pages";
import Team from "./components/Team.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/problem-statements" element={<ProblemStatementsPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
