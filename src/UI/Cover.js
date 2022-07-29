import React, { useEffect } from 'react'
import "./style.css"
import{Link} from "react-router-dom"
import CategoryContext from '../CategoryContext'
import { useContext } from 'react'
import { API } from '../backend'

const Cover = () => {
    const url='https://thumbs.dreamstime.com/b/illustration-deep-space-spacex-logo-over-vector-stars-195641422.jpg'
    // const {items} = useContext(CartContext)
    const {category} = useContext(CategoryContext)
    const {cover} = useContext(CategoryContext)



  return (
    <div className='app_cover_body'>
        <div className='app_cover_image'>
            <img src={cover._id ? `${API}/get/figure/photo/${cover._id}` : url}/>
        </div>
        <div className='app_cover_contents'>
            <div className='app_cover_category'>
                {category.name}
            </div>
            <div className='app_cover_title'>
                {cover.name}
            </div>
            <div className='app_cover_description'>
                <p>
                    {cover.description}
                </p>
            </div>
            <div className='app_cover_btn'>
                <h3><Link to="/" className="link black">Click on images to change</Link></h3>
            </div>
        </div>
    </div>
  )
}

export default Cover