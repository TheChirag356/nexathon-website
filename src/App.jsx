import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainPage, ProblemStatementsPage, Register, ErrorPage } from "./pages";
import Team from "./components/Team.jsx";
import Socials from "./pages/Socials.jsx";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/problem-statements" element={<ProblemStatementsPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/team" element={<Team />} />
      <Route path="/socials" element={<Socials />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Analytics />
    </div>
  );
};

export default App;
