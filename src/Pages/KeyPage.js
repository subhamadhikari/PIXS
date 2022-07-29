import React from 'react'
import Header from '../UI/Header'
import Key from '../UI/Key'

const KeyPage = () => {
    const key = process.env.REACT_APP_KEY
  return (
  <>
  <Header/>
  <Key/>
  </>
  )
}

export default KeyPage