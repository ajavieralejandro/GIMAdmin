import SideBar from "../components/Sidebar/Sidebar";
import Clients from "./Admin/Clients";
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import Cajas from "./Admin/Cuentas/cajas";
const AdminPage = () =>{
    return(
        <>        <BrowserRouter>

        <SideBar>
      <Routes>
        <Route  path="/" element={<Clients />} />
        <Route  path="/cajas" element={<Cajas />} />

    
      </Routes>
           </SideBar>
           </BrowserRouter>    
        </>
    )
}

export default AdminPage;