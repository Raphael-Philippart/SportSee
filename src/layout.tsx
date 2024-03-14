import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Categories from './components/categories/Categories'

const Layout: FC = () => <div>
  <Header />
  <div className="layout">
    <Categories />
    <main className="main">
      <Outlet />
    </main>
  </div>
</div>

export default Layout
