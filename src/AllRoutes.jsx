import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
export default AllRoutes;
