import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => <div>
  <div><Link to={'/profil/12'}>User ID 12</Link></div>
  <div><Link to={'/profil/18'}>User ID 18</Link></div>
</div>

export default Home
