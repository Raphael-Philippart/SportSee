import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import UserProvider from './components/user/UserProvider'
import NotFound from './components/notFound/NotFound'
import Home from './components/home/Home'
import './App.scss'

const App: FC = () => <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="profil/:userId?" element={<UserProvider />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>

export default App
