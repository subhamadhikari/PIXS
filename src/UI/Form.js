import React , {useState,useEffect} from 'react'
import "./style.css"
import {getCategories,createFigure} from "./helper/uiapicalls"
import { useNavigate } from 'react-router-dom'
import {isAuthenticated} from "../P.Routes/helper/index"

const Form = () => {

    const key = isAuthenticated()
    const navigate = useNavigate()

    const [values, setValues] = useState({
        name:"",
        description:"",
        category:"",
        photo:"",
        error:"",
        loading:false,
        categories:[],
        createdFigure:"",
        getRedirect:false,
        formData:""
    })

    
    const preLoad = () => {
        getCategories().then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setValues({
                    ...values,categories:[...data],formData:new FormData()
                })
            }
        })
    }

    useEffect(() => {
        preLoad()
    },[])

    const {name,description,category,photo,error,loading,categories,createdFigure,getRedirect,formData} = values

    const handleChange = name => e => {
        const value = name === "photo" ? e.target.files[0] : e.target.value
        formData.append(name,value)
        formData.append("app_key",key)
        setValues({...values,[name]:value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setValues({...values,error:"",loading:true})

        createFigure(formData)
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error})
            }else{
                setValues({
                    ...values,
                    name:"",
                    description:"",
                    photo:"",
                    loading:false,
                    createdFigure:data.name,
                    getRedirect:true
                })
            }
        })

    }

    const afterMessage = () => {
        return(
            <div className='app_message_container' style={{backgroundColor : createdFigure ? '#2ecc71': '#e74c3c'}}>
                <div className='app_message'>
                    {
                        !createdFigure && (
                            <h3>{error || 'Go on'}</h3>
                        )
                    }{
                        createdFigure && (
                            <h3>Figure created successfully!</h3>
                        )
                    }
                </div>
            </div>
        )
    }

    const redirectAdmin = () => {
        if(getRedirect){
            setTimeout(() => {
                setValues({...values,getRedirect:false})
                navigate('/')
            },3000)
        }
    }


  return (
  <div className='app_form_container'>  
    <form className='app_form'>
        {afterMessage()}
        <label for="name">Name</label>
        <input type="text" className="app_form_fname" name="name" placeholder=" Enter the name " onChange={handleChange("name")}/>

        <label for="description">Description</label>
        <input type="text" className ="app_form_lname" name="description" placeholder="Enter the description" onChange={handleChange("description")}/>

        <label for="category">Category</label>
        <select className="app_form_category" name="category" onChange={handleChange("category")}>
        {
            categories.map((cate,index) => {
                return(
                    <option key={index} value={cate._id}>{cate.name}</option>
                )
            })
        }
        </select>

        <label className="app_form_image">
            <input type="file" onChange={handleChange("photo")}/>
            Image</label>
        
    
        <input type="submit" className='app_form_submit' onClick={onSubmit} value="Submit"/>
    </form>
    {redirectAdmin()}
  </div>
  )
}

export default Form