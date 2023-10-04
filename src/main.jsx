import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginHome from './component/Login/LoginHome.jsx'
import FeedPage from './component/feed/FeedPage.jsx'
import { selectUser } from './features/UserSlice.jsx'
import { Provider } from 'react-redux'
import { store } from './store.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <App />,
    errorElement : "error 404 not found",
    children : [
      {
        path : `/login`,
        element : <LoginHome />
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
