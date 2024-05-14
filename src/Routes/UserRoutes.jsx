import { Route, Routes } from "react-router-dom";
import HomeLayout from "../Pages/User/HomeLayout";
import Store from "../Pages/User/Store";
import Contact from "../Pages/User/Contact";
import Cart from "../Pages/User/Cart";
import AuthGuard from "../RouteGuard/AuthGuard";
import Login from "../Pages/User/Login";
import Signup from "../Pages/User/Signup";
import Orders from "../Pages/User/Orders";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <AuthGuard>
              <Cart />
            </AuthGuard>
          }
        />
        <Route
          path="/orders"
          element={
            <AuthGuard>
              <Orders />
            </AuthGuard>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default UserRoutes;
