import React, { useEffect } from "react";
import Sidebar from "../../componants/admin/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../../componants/admin/Topbar";
import { useGetProfileQuery } from "../../feature/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../feature/auth/authSlice";

function AdminLayout() {
  const { data, isSuccess } = useGetProfileQuery();
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setUser({
          user: {
            email: data?.email,
            role: data?.role,
          },
        }),
      );
    }
  }, [isSuccess]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex selection:bg-indigo-500 selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar data={data} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar></Topbar>

        <main className="flex-1 p-8 overflow-y-auto bg-slate-950/40">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
