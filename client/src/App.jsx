import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './contexts/AuthContext'


import Dashboard from './pages/Dashboard'
import MyPlans from './pages/MyPlans'
import Progress from './pages/Progress'
import AIChatbot from './components/AIChatbot'

const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <ScrollToTop />
        
        <Routes>
          {/* Auth Routes */}
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>

          {/* Public Routes */}
          <Route path='/' element={<WithLayout><Home /></WithLayout>}/>
          <Route path='/about' element={<WithLayout><About /></WithLayout>}/>
          <Route path='/services' element={<WithLayout><Services /></WithLayout>}/>
          <Route path='/testimonials' element={<WithLayout><Testimonials /></WithLayout>}/>
          <Route path='/blog' element={<WithLayout><Blog /></WithLayout>}/>
          <Route path='/blog/:id' element={<WithLayout><BlogPost /></WithLayout>}/>
          <Route path='/contact' element={<WithLayout><Contact /></WithLayout>}/>

          {/* Protected Routes */}
          <Route path='/dashboard' element={<PrivateRoute><WithLayout><Dashboard /></WithLayout></PrivateRoute>}/>
          <Route path='/plans' element={<PrivateRoute><WithLayout><MyPlans /></WithLayout></PrivateRoute>}/>
          <Route path='/progress' element={<PrivateRoute><WithLayout><Progress /></WithLayout></PrivateRoute>}/>
          
          <Route path='*' element={<WithLayout><Home /></WithLayout>}/>
        </Routes>
      </div>
    </AuthProvider>
  )
}

// Layout component for pages that need Navbar & Footer
const WithLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <AIChatbot />
    </>
  )
}

export default App