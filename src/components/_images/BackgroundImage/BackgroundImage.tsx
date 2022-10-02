import './BackgroundImage.css'

import { useLocation } from 'react-router-dom'

import bgImage from '../../../assets/ryck-morty-bg.webp'

export default function BackgroundImage() {
  const location = useLocation()

  return (
    <img
      className="background-image"
      src={bgImage}
      alt=""
      style={{ opacity: location.pathname === '/' ? 0.7 : 0.1 }}
    />
  )
}
