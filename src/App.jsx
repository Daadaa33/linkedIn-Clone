import { useSelector } from 'react-redux'
import FeedPage from './component/feed/FeedPage'
import Header from './component/header/Header'
import {Outlet} from 'react-router-dom'
import { isSearchOpen, selectUser } from './features/UserSlice'
import Login from './Pages/login/Login'

function App() {
  const user = useSelector(selectUser)
  return (
    <div className=" bg-[#F3F2F0]">
      <Header />
      {user === null ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <div className="max-w-6xl  mx-auto">
            <div className="pt-14">
              {/* <FeedPage /> */}
              <Outlet />
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default App
