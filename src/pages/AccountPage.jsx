import { useContext } from "react";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
import { TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = () => {
    Cookies.remove(TOKEN);
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <div>
      <h2>AccountPage</h2>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default AccountPage;
