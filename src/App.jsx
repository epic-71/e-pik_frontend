
import { Routes, Route } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";


function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/*" element={<UserRoutes />}/>
        <Route path="*" element="404 Page not found" />
      </Routes>
    </div>
  );
}

export default App;
