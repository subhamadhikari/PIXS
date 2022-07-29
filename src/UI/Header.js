import React from 'react'
import {Link} from "react-router-dom"
import "./style.css"
import { isAuthenticated } from '../P.Routes/helper'

const Header = () => {
  const auth = isAuthenticated()
  return (
    <div className='app_header'>
        <div className='app_headerMenu'>
            <div className='app_headerMenu_item1'>
                <Link to="/" className='app_logo link'><h2>PIXS</h2></Link>
            </div>
            {
              auth && (
                <div className='app_headerMenu_item2'>
                  <Link to="/admin" className='app_key link'>Admin</Link>
                </div>
              )
            }
            {
              !auth && (
                <div className='app_headerMenu_item2'>
                  <Link to="/key" className='app_key link'>KEY</Link>
                </div>
              )
            }
        </div>
    </div>
  )
}

export default Header