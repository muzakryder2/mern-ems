import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginLanding from "./pages/login-landing";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Employees from "./pages/employees";
import Attendance from "./pages/attendance";
import Leave from "./pages/leave";
import Paychecks from "./pages/paychecks";
import Settings from "./pages/settings";
import PrintPaycheck from "./pages/print-paycheck";

export default function App() {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/paychecks" element={<Paychecks />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/paychecks/:id" element={<PrintPaycheck />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}
