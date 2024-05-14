import { Outlet } from "react-router-dom";
import HomeNav from "../../components/HomeNav";

function HomeLayout() {
  return (
    <div className="relative w-full h-screen">
      <div className="fixed w-full bg-white">
        <HomeNav />
      </div>
      <div className="bg-primary_bg w-full h-full pt-24">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
