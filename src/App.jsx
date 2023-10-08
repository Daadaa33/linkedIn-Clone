import LoginHome from './component/Login/LoginHome'
import FeedPage from './component/feed/FeedPage'
import Header from './component/header/Header'
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <div className='relative bg-[#F3F2F0] w-full h-full'>
      <Header />
    <div className='max-w-6xl  mx-auto'>
      <div className=" pt-14 lg:pt-20">
        <FeedPage />
      <Outlet />
      </div>
      {/* App body */}
      {/* SideBar */}
      {/* Feed */}
    </div>
    </div>
  )
}

export default App
