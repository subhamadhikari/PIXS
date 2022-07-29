export const isAuthenticated = () => {
    if(typeof window !== 'undefined'){
        if(localStorage.getItem("key") === process.env.REACT_APP_KEY){
            return (localStorage.getItem("key"))
        }else{
            return false
        }
    }
}