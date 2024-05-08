import { Outlet } from "react-router-dom";
import HomeNav from "../../components/HomeNav";

function HomeLayout() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[8%]">
        <HomeNav />
      </div>
      <div className="bg-primary_bg w-full h-[92%]">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
