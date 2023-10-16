import { useDispatch, useSelector } from 'react-redux'
import Header from './component/header/Header'
import {Outlet} from 'react-router-dom'
import { selectIsOpen, selectUser, setIsActive, setIsSearchOpen } from './features/UserSlice'
import Login from './Pages/login/Login'

function App() {
  const user = useSelector(selectUser)
  const isopen = useSelector(selectIsOpen)

  const dispatch = useDispatch()

  const close = () => {
    dispatch(setIsSearchOpen(false));
    dispatch(setIsActive(false));
  }
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
              <Outlet />
            </div>
          </div>
        </>
      )}

      {isopen && (
        <div
          onClick={close}
          className="fixed top-[3.5rem] bottom-0 right-0 left-0 z-[999] bg-secondaryHeader-dark opacity-50  "
        />
      )}
     
    </div>
  );
}

export default App
