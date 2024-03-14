import { FC } from 'react'
import Logo from '../../logo/Logo'
import CustomLink from '../../customLink/CustomLink'
import './Menu.scss'

const Menu: FC = () => <nav className='Menu'>
  <Logo />
  <ul>
    <li><CustomLink to='/'>Accueil</CustomLink></li>
    <li><CustomLink to='/profil'>Profil</CustomLink></li>
    <li><CustomLink to='/reglage'>Réglage</CustomLink></li>
    <li><CustomLink to='/communaute'>Communauté</CustomLink></li>
  </ul>
</nav>

export default Menu
