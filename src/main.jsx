import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/singUp/SignUp.jsx";
import ForgetPassword from "./pages/forget-password/ForgetPassword.jsx";
import ResetPassword from "./pages/reset-password/ResetPassword.jsx";
import About from "./pages/about/About.jsx";
import RegisterAsDonor from "./pages/register-as-donor/RegisterAsDonor.jsx";
import RegisterAsOrganization from "./pages/register-as-oranization/RegisterAsOranization.jsx";
import Recipient from "./pages/recipient/Recipient.jsx";
import BloodDonors from "./pages/blood-donors/BloodDonors.jsx";
import BloodBank from "./pages/blood-bank/BloodBank.jsx";
import DonorProfile from "./pages/donor-profile/DonorProfile.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Profiles from "./pages/profiles/Profiles.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import Chat from "./pages/chat/Chat.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/register-as-donor", element: <RegisterAsDonor /> },
  { path: "/register-as-organization", element: <RegisterAsOrganization /> },
  { path: "/donor-profile", element: <DonorProfile /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/chat", element: <Chat  /> },
  { path: "/find-donor", element: <Profiles /> },
  { path: "/recipient", element: <Recipient /> },
  { path: "/blog", element: <Blog/> },
  { path: "/blood-donors", element: <BloodDonors /> },
  { path: "/blood-bank", element: <BloodBank /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
