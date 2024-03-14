import { FC } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import './NotFound.scss'

const NotFound: FC = () => <div className="error-404">
  <Logo />
  <h1>Oups !! Erreur 404 page non trouver.</h1>
  <p><Link to={'/'}>Retour à l'accueil</Link></p>
</div>

export default NotFound
