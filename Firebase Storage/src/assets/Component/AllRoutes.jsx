import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addpage from './Addpage'
import Product from './Product'
import Home from './Home'
import PrivatePage from './PrivatePage'
import DescriptionPage from './DescriptionPage'
import About from './About'
import Edit from './Edit'
import Login from './Page/Login'
import SignUp from './Page/SignUp'

const AllRoutes = () => {
  return (
    
        <Routes>
        
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/addpage"} element={<Addpage />} ></Route>
            <Route path={"/about"} element={<About />}></Route>
            <Route path={"/login"} element={<Login />}></Route>
            <Route path={"/signup"} element={<SignUp />}></Route>
            <Route path={"/singlepage/:id"} element={<DescriptionPage />}/>
            <Route path={"/product"} element={
               <PrivatePage>
              <Product />
               </PrivatePage>
              }></Route>
            <Route path={"/edit/:id"} element={<Edit />}/>

              <Route path="*" element={<h1>Page Not Found</h1>} > </Route>
        </Routes>
    
  )
}

export default AllRoutes