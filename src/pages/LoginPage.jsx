import { useContext } from "react";
import { TOKEN } from "../constants";
import request from "../server";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async () => {
    try {
      let user = {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      };

      let {
        data: { token },
      } = await request.post("api/login", user);
      Cookies.set(TOKEN, token);
      setIsAuthenticated(true);
      navigate("/my-blogs");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;
