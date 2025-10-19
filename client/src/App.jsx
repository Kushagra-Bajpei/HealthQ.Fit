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


const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <ScrollToTop />
        
        {/* Routes without Navbar & Footer (Login/Signup) */}
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>

        {/* Routes with Navbar & Footer (All other pages) */}
        <Routes>
          {/* Protected Routes (All other pages require login) */}
          <Route path='/' element={
            <PrivateRoute>
              <WithLayout>
                <Home />
              </WithLayout>
            </PrivateRoute>
          }/>
          <Route path='/about' element={
            <PrivateRoute>
              <WithLayout>
                <About />
              </WithLayout>
            </PrivateRoute>
          }/>
          <Route path='/services' element={
            <PrivateRoute>
              <WithLayout>
                <Services />
              </WithLayout>
            </PrivateRoute>
          }/>
          <Route path='/testimonials' element={
            <PrivateRoute>
              <WithLayout>
                <Testimonials />
              </WithLayout>
            </PrivateRoute>
          }/>
          <Route path='/blog' element={
            <PrivateRoute>
              <WithLayout>
                <Blog />
              </WithLayout>
            </PrivateRoute>
          }/>
          <Route path='/blog/:id' element={
            <PrivateRoute>
              <WithLayout>
                <BlogPost />
              </WithLayout>
            </PrivateRoute>
          }/>
          <Route path='/contact' element={
            <PrivateRoute>
              <WithLayout>
                <Contact />
              </WithLayout>
            </PrivateRoute>
          }/>
          {/* Redirect any unknown route to home */}
          <Route path='*' element={
            <PrivateRoute>
              <WithLayout>
                <Home />
              </WithLayout>
            </PrivateRoute>
          }/>
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
    </>
  )
}

export default App