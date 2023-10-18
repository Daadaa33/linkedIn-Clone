import { useDispatch, useSelector } from 'react-redux'
import Header from './component/header/Header'
import {Outlet} from 'react-router-dom'
import { selectIsOpen, selectUser, setIsActive, setIsSearchOpen } from './features/UserSlice'
import Login from './Pages/login/Login'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import Loader from './component/Loader/Loader'
import { AuthContextProvider, UserAuth } from './context/AuthContext'
import Protected from './component/Protected'

function App() {
  const [loading, setLoading] = useState(true);

  const user = useSelector(selectUser);
  // const { } = UserAuth();
  const isopen = useSelector(selectIsOpen);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(setIsSearchOpen(false));
    dispatch(setIsActive(false));
  };

  useEffect(() => {
    // onAuthStateChanged(auth, (res) => {
    //   if (res?.accessToken) {
    //     navigate("/feed");
    //   } else {
    //     setLoading(false);
    //   }
    // });

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <AuthContextProvider>
      <div className=" bg-[#F3F2F0]">
        <>
          <Header />
          <div className="max-w-6xl  mx-auto">
            <div className="pt-14">
              <Outlet />
            </div>
          </div>
        </>

        {isopen && (
          <div
            onClick={close}
            className="fixed top-[3.5rem] bottom-0 right-0 left-0 z-[999] bg-secondaryHeader-dark opacity-50  "
          />
        )}
      </div>
    </AuthContextProvider>
  );
}

export default App
