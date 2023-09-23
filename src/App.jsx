import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AOS from 'aos';

import Shimer from "./components/admin/Shimmer";

const UserRoutes = lazy(() => import("./routes/userRoutes"));
// const AdminRoute = lazy(() => import("./routes/adminRouter"));
// const VendorRoute = lazy(() => import("./routes/vendorRouter"));
import VendorRoute from "./routes/vendorRouter"
import AdminRoute from "./routes/adminRouter"

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<UserRoutes />} />

        <Route
          exact
          path="/admin/*"
          element={
            <Suspense fallback={<Shimer />}>
              <AdminRoute />
            </Suspense>
          }
        />

        <Route exact path="/venue/*" element={<Suspense fallback={<Shimer />}><VendorRoute /></Suspense>} />
      </Routes>
    
      </>
  );
}

export default App;
