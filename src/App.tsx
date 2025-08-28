
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { 
            background: '#10b981', 
            color: '#fff',
            fontWeight: '500'
          },
          success: { 
            style: { background: '#10b981' } 
          },
          error: { 
            style: { background: '#ef4444' } 
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </>
  )
}

export default App
