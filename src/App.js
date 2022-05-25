import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import Payment from "./pages/Dashboard/Payment";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home";
import Purchase from "./pages/Home/Purchase";
import Login from "./pages/Login/Login";
import RequireAdmin from "./pages/Login/RequireAdmin";
import RequireAuth from "./pages/Login/RequireAuth";
import Signup from "./pages/Login/Signup";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageAllOrder from "./pages/Dashboard/ManageAllOrder";
import DashboardCover from "./pages/Dashboard/DashboardCover";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<DashboardCover />}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="manageorder"
            element={<ManageAllOrder></ManageAllOrder>}
          ></Route>
          <Route path="alluser" element={<Users></Users>}></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
