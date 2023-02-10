import { useLocation } from 'react-router-dom'
import NotFoundImage from './../assets/not-found.png'

import './NotFound.sass'

function NotFound() {
  const location = useLocation()
  
  return (
    <div className='not-found-container'>
      <span>NOT FOUND</span>
      <span>{location.pathname}?</span>
      <img src={NotFoundImage}/>
    </div>
  )
}

export default NotFound