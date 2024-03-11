
import './App.css'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/User/UserPage'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
export default function App() {
  const [user,setUser] = useState(null);
  let user_selector = useSelector(state=>state.user.currentUser);
  useEffect(() => {
      if(user_selector!=null)
        setUser(user_selector);
    }, [user_selector])

  return (
    <>
    {user?<AdminPage />:<UserPage />}
    </>
  )
}