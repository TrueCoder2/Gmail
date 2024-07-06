import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Inbox from "./components/Inbox"
import Mail from "./components/Mail"
import ComposeMail from "./components/ComposeMail"
import { useDispatch ,useSelector } from 'react-redux';
import { auth } from '../src/firebase';
import { setAuthUser } from './redux/slice';
import SignIn from './components/Signin';
import { useEffect } from "react"

const router = createBrowserRouter( [
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      },

    ]
  }
] )

function App() {
  const { authUser } = useSelector(store => store.app);
  const dispatch = useDispatch();

   useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setAuthUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }));
      }
    })
  }, [])

  return (
    <div>
    {
     !authUser  ? (<SignIn />) : 
       (<>
        <Navbar />
    <RouterProvider router={router} />
    <div className="w-[30%] absolute bottom-0 right-20 z-10">
      <ComposeMail />
    </div>
       </>)
    }
    </div>
  )
}

export default App
