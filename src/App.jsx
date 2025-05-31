import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import BookDetail from './pages/BookDetail'
import MyLibrary from './pages/MyLibrary'
import Favorites from './pages/Favorites'
import ReadingList from './pages/ReadingList'

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/my-library" element={<MyLibrary />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/reading-list" element={<ReadingList />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App