import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FeedPage from './component/feed/FeedPage.jsx'
import { selectUser } from './features/UserSlice.jsx'
import { Provider } from 'react-redux'
import { store } from './store.jsx'
import Login from './Pages/login/Login.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <App />,
    errorElement : "error 404 not found",
    children : [
      {
        path : "/login",
        element : <Login />
      },
      {
        path : "/Feed",
        element : <FeedPage />
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
