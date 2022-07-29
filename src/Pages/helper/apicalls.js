import { API } from "../../backend"
export const preData = (id) => {
    return fetch(`${API}/get/figure/category/${id}`,{
        method:"GET"
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}