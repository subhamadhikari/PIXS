import React from 'react'
import Header from '../UI/Header'
import Cover from '../UI/Cover'
import Slider from '../UI/Slider'
import { useContext , useEffect , useState } from "react";
import CategoryContext from '../CategoryContext';
import { preData } from './helper/apicalls';

const HomePage = () => {

  const {category,cover} = useContext(CategoryContext)
  // console.log(category)
  console.log("HP",cover)
  const [figures, setFigures] = useState([])
  const [reload,setReload] = useState(false)

  const preLoad = () => {
    preData(category.id).then(data => {
      if(data.error){
        console.log("Error in loading data")
      }else{
        setFigures(data)
      }
    })
  }

  useEffect(() => {
    preLoad()
  },[reload])


  return (
    <>
    <Header/>
    <Cover/>
    <Slider figures={figures} setReload={setReload} reload={reload}/>
    </>
  )
}

export default HomePage