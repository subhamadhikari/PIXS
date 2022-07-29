import React , {useState} from 'react'
import { useNavigate } from 'react-router'

const Key = () => {

    const [key, setKey] = useState("")
    const navigate = useNavigate()

    const onSubmit = (e) => {
      e.preventDefault()

      if(typeof window !== undefined){
        if(key === process.env.REACT_APP_KEY){
          localStorage.setItem("key",key)
          setKey("")
          navigate("/admin")
        }else{
          console.log("Sorry :(")
          setKey("")
          navigate("/")
        }
      }
    }

  return (
    <div className='app_key_form'>
        <div className='app_key_field'>
            <input className='app_key_input' type="text" value={key} onChange={e => setKey(e.target.value)} placeholder="Enter your key"/>
            <button type='submit' className='app_key key_btn' onClick={onSubmit}>Send</button>
        </div>
    </div>
  )
}

export default Key