import { Suspense } from "react"
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"
import { routes } from "./routes"
import logo from '../assets/reactts.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              {routes.map((route) => (
                <li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}