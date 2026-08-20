import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import Sprints from "./pages/admin/Sprints";
import BackToTop from "./componants/common/BackToTop";
import Kanban from "./pages/admin/Kanban";

function App() {
  // const  [login,{isLoading}] = useLoginMutation();
  // const credentials = {
  //   email: "ashwanisrkc@gmail.com",
  //   password: "ashwani",
  // };
  // const handleLogin = async () => {
  //   try {
  //     const result = await login(credentials).unwrap();
  //     if(result.status){
  //       toast.success(result?.message)
  //     }
  //     console.log(result);
  //   } catch (error) {
  //     toast.warning(error?.data?.message)
  //   }
  // };
  // const hanleConnect=()=>{

  //   window.location.href =""

  // }

  return (
    <>
        <BackToTop></BackToTop>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sprints" element={<Sprints />} />
          <Route path="kanban" element={<Kanban />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
