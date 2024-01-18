import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Form from "./RegistrationForm.jsx";
import "./index.css";
// import TodoList from './TodoList.jsx'
// import HobbyList from './HobbyPractise.jsx'
// import { ToastContainer } from 'react-toastify'
// import HobbiesFiller from './HobbyFillerOptimized.jsx'
// import EventHandling from './Event.jsx'
// import EventBind from './EventBind.jsx'
// import Mounting from './ComponentLifecycle/Mounting.jsx'
// import Updating from './ComponentLifecycle/Updating.jsx'
// import ParentComponent from './ComponentLifecycle/Parent.jsx'
import ProfileObj from "./useState/nonPrimitive.jsx";
import RegistrationForm from "./RegistrationFC.jsx";
import HobbiesFunc from "./staleClosure/prevState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {" "}
    <RegistrationForm />
  </>
);

{
  /* <ParentComponent/> */
}
{
  /* <ToastContainer 
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"/>  */
}
// <React.StrictMode>
{
  /* </React.StrictMode>, */
}
