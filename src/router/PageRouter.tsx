import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { Provider } from "react-redux";

import { store } from "../store/store";

import Home from "../pages/home-page";
import Setting from "../pages/setting-page";
import Auth from "../pages/auth-page";
import Counter from "../pages/counter-page";
import Users from "../pages/users-page";
import Register from "../pages/register-page";

const PageRouters = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Auth />} path="/auth" />
            <Route element={<Setting />} path="/setting" />
            <Route element={<Counter />} path="/counter" />
            <Route element={<Users />} path="/users" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default PageRouters;
