import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainPage, ProblemStatementsPage, Register, ErrorPage } from "./pages";
import Team from "./components/Team.jsx";
// import Test from "./components/Test.jsx";
import Socials from "./pages/Socials.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/problem-statements" element={<ProblemStatementsPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/team" element={<Team />} />
      <Route path="/socials" element={<Socials />} />
      {/* <Route path="/test" element={<Test />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
