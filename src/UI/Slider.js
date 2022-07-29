import React,{useState,useEffect,useContext} from 'react'
import "./style.css"
import { getCategories } from './helper/uiapicalls'
import CategoryContext from '../CategoryContext'
import { API } from '../backend'

const Slider = ({figures , setReload = f => f , reload=undefined}) => {
   const url="https://thumbs.dreamstime.com/b/illustration-deep-space-spacex-logo-over-vector-planet-195641418.jpg"

   const [categories, setCategories] = useState([])

   const {addToCategory,addToCover} = useContext(CategoryContext)
   const {cover} = useContext(CategoryContext)



   

   const preLoad = () => {
    getCategories().then(data=> {
        if(data.error){
            console.log(data.error)
        }else{
            setCategories(data)
        }
    }).catch(err => console.log(err))
   }

   useEffect(() => {
    preLoad()
   },[])

   const fixTheCategory = (name,id) => {
    addToCategory(name,id)
   }

   const fixTheCover = (fig) => {
    fig.photo = undefined
    fig.category = undefined
    addToCover(fig)
   }

  return (
    <div>
    <div className='app_slider_container'>
        {
            figures.map((fig,index) => {
                return(
                    <div key={index} className='app_slider_content'>
                    <div className='app_slider_image'>
                        <img src={`${API}/get/figure/photo/${fig._id}`} onClick={() => {
                            fixTheCover(fig)
                        }}/>
                    </div>
                </div>
                )
            })
        }
    </div>
    {/* // Drop down */}
        <nav>
            <label for="touch"><span>Category</span></label>               
            <input type="checkbox" id="touch"/> 
            <ul class="slide">
                {
                    categories.map((cate,index) => {
                        return(
                            <li key={index} onClick={() => {
                                fixTheCategory(cate.name,cate._id)
                                setReload(!reload)
                                console.log(reload)
                            }}><a href="#">{cate.name}</a></li> 
                        )
                    })
                }
            </ul>
        </nav> 
    </div>
    
  )
}

export default Slider