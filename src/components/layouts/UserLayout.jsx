import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import PortalNavbar from '../PortalNavbar'
import Sidebar from '../Sidebar'

const UserLayout = () => {
  const navigate = useNavigate()
  const [activeSidebar, setActiveSidebar] = useState(true)

  useEffect(() => {
    const isAdmin = localStorage.getItem('is_admin')
    const token = localStorage.getItem('token')
    if (!token || !isAdmin) {
      navigate('/')
      return
    }
    if (isAdmin === 1) {
      navigate('/admin/dashboard')
      return
    }
    // eslint-disable-next-line
  }, [])

  const toggleSidebar = () => {
    setActiveSidebar(!activeSidebar)
  }

  return (
    <div className='flex overflow-x-hidden h-screen'>
      <Sidebar activeSidebar={activeSidebar} />
      <div className='flex-1'>
        <PortalNavbar toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout
