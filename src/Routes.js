import React from 'react'
import { BrowserRouter,Routes as BRoutes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import KeyPage from './Pages/KeyPage'
import { CategoryProvider } from './CategoryContext'
import PrivateRoutes from './P.Routes/PrivateRoutes'
import AdminPage from './Pages/AdminPage'

const Routes = () => {
  return (
    <CategoryProvider>
    <BrowserRouter>
        <BRoutes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/key' element={<KeyPage/>}/>
            <Route element={<PrivateRoutes/>}>
              <Route path='/admin' element={<AdminPage/>}/>
            </Route>
        </BRoutes>
    </BrowserRouter>
    </CategoryProvider>
  )
}

export default Routes