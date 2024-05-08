import { Route, Routes } from "react-router-dom";
import HomeLayout from "../Pages/User/HomeLayout";
import Store from "../Pages/User/Store";
import Contact from "../Pages/User/Contact";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;
