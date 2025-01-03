import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './globals.css'
import { SigninForm } from './_auth/forms/SigninForm'
import { Home } from './_root/pages'
import { SignupForm } from './_auth/forms/SignupForm'

export const App = () => {
  return (

    <main className="flex h-screen">

        <Routes>
            {/*Public Routes*/}
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />



            {/*Private Routes*/}
            <Route index element={<Home />} />
        </Routes>
    </main>

    
  )
}

export default App