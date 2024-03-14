import { FC } from 'react'
import LogoIMG from './img/Logo.svg'
import './Logo.scss'

const Logo: FC = () => <div className="logo">
  <img src={`${LogoIMG}`} alt="Logo SportSee" />
</div>

export default Logo
