import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return navigate("/signup");
  }, [isLoggedIn, navigate]);

  return children;
}

export default AuthGuard;
