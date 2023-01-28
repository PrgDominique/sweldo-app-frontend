import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Announcement from '../../../components/portal/user/dashboard/Announcement'
import TimeCard from '../../../components/portal/user/dashboard/TimeCard'
import * as RestApi from '../../../utils/rest_api_util'

const Dashboard = () => {
  const navigate = useNavigate()
  const [isClockIn, setIsClockIn] = useState(false)
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    getDashboard()
    // eslint-disable-next-line
  }, [])

  const getDashboard = async () => {
    try {
      const result = await RestApi.getDashboard()
      const response = await result.json()
      if (result.status === 200) {
        setIsClockIn(response.isClockIn)
        setAnnouncements(response.announcements)

      }
      if (result.status === 401) {
        localStorage.clear()
        navigate('/')
      }
    } catch (error) {}
  }

  return (
    <>
    
<div className="grid grid-cols-4">

<div className='row-span-1'>
             
            </div>

<div className='row-span-1'>
             
            </div>
<div className='row-span-1'>
             
            </div>

<div className="col-span-1 ">

          <div className='announce overflow-auto mb-5 shadow '>
          <Announcement announcements={announcements}/>
        </div>
          <div className='shoadow mt-6'>
            <TimeCard isClockIn={isClockIn} />
          </div>
</div>
</div>

           
    </>
  )
}

export default Dashboard
