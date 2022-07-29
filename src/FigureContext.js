import { createContext , useState } from "react";
const FigureContext = createContext()

export const FigureProvider = ({children}) => {
    const [cover, setCover] = useState({
        name:"",
        description:"",
        id:""
    })

    const addToCover = (name,description,id) => {
        setCover(name,description,id)
    }

    return (
        <FigureContext.Provider value={{cover,addToCover}}>
            {children}
        </FigureContext.Provider>
    )
}

export default FigureContext;