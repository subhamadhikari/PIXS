import { createContext , useState } from "react";
const CategoryContext = createContext()

export const CategoryProvider =({children}) => {

    const [category,setCategory] = useState({
        name:"SPACEX",
        id:"62d620eeeaa7f09a54615246"
    })

    const [cover, setCover] = useState({
    })

    const addToCategory = (name,id) => {
        setCategory({name,id})
    }

    const addToCover = (fig) => {
        setCover(fig)
    }

    return(
        <CategoryContext.Provider value={{category,addToCategory,cover,addToCover}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContext