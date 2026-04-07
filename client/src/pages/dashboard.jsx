import { useEffect, useState } from "react";
import {
  dummyAdminDashboardData,
  dummyEmployeeDashboardData,
} from "../assets/assets";
import Loading from "../components/loading";
import EmployeeDashboard from "../components/employee-dashboad";
import AdminDashboard from "../components/admin-dashboard";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dummyAdminDashboardData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <p className="text-center text-slate-500 py-12">
        Failed to load dasboard
      </p>
    );
  }

  if (data.role === "ADMIN") {
    return <AdminDashboard data={data} />;
  } else {
    return <EmployeeDashboard data={data} />;
  }
}
