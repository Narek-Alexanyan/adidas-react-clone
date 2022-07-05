import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div>
      {isAuth ? (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
              exact={route.exact}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      ) : (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
              exact={route.exact}
            />
          ))}
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
