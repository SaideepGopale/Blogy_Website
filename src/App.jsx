import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import BlogyPage from './pages/BlogyPage'
import { Route, Routes } from 'react-router-dom'
import RecentPage from './pages/RecentPage'
import MembershipPage from './pages/MembershipPage'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogyPage />} />
        <Route path="/recentposts" element={<RecentPage/>} />
        <Route path="Membership" element={<MembershipPage/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
