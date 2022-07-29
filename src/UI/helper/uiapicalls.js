import { API } from "../../backend";


export const getCategories = () => {
    return fetch(`${API}/get/categories`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const createFigure = (figure) => {
    return fetch(`${API}/create/figure`,{
        method:"POST",
        headers:{
            Accept:"application/json"
        },
        body:figure
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}
