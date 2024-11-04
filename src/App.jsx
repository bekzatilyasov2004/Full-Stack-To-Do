import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./dashboard/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import TodayChallenges from "./dashboard/TodayChallenges";
import WeeklyTasks from "./dashboard/WeeklyTasks";
import MonthlyTasks from "./dashboard/MonthlyTasks";
import Tutorial from "./dashboard/Tutorial";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route 
          path="dashboard" 
          element={
              <Dashboard />
          }
        >
          <Route index element={<Tutorial />} />
          <Route path="today" element={<TodayChallenges />} />
          <Route path="weekly" element={<WeeklyTasks />} />
          <Route path="monthly" element={<MonthlyTasks />} />
          <Route index element={<TodayChallenges />} /> {/* Default to TodayChallenges */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
