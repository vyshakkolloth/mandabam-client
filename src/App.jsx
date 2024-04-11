import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import AOS from 'aos';

import Shimer from "./components/admin/Shimmer";
import ConnectionError from "./components/errors/ConnectionError";

import UserRoutes from "./routes/userRoutes"
const AdminRoute = lazy(() => import("./routes/adminRouter"));
const VendorRoute = lazy(() => import("./routes/vendorRouter"));


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/conerr" element={<ConnectionError/>}/>
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

        <Route exact path="/venue/*" 
        element={
        <Suspense fallback={<Shimer />}>
          <VendorRoute />
        </Suspense>
        } />
      </Routes>
    
      </>
  );
}

export default App;
