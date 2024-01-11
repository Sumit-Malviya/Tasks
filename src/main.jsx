import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './RegistrationForm.jsx'
import './index.css'
import TodoList from './TodoList.jsx'
import HobbyList from './HobbyPractise.jsx'
import { ToastContainer } from 'react-toastify'




ReactDOM.createRoot(document.getElementById('root')).render(<> <ToastContainer 
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"/> 
  < HobbyList/>
  </>)
 // <React.StrictMode>
 {/* </React.StrictMode>, */}