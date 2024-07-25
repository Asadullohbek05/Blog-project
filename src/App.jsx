import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontLayout from "./components/layout/front";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MyBlogsPage from "./pages/MyBlogsPage";
import AccountPage from "./pages/AccountPage";
import PageNotFound from "./pages/PageNotFound";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:blogId" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          {isAuthenticated ? (
            <Route path="my-blogs" element={<MyBlogsPage />} />
          ) : null}
          {isAuthenticated ? (
            <Route path="account" element={<AccountPage />} />
          ) : null}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
