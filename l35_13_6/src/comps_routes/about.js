import React, { useEffect,useContext } from 'react'
import { AppContext } from '../context/context'

export default function About() {

  const {val} = useContext(AppContext)

  useEffect(() => {
    // componentWillUnmount -> כמו
    return () => {
      // יפעיל את הפונקציה ברגע שהקומפ נעלם
      // או החלפת לינק או שהקומפ הוא פריט ברשימה
      // ריאקטבית כגון רשימת קניות /קופה וכו
      console.log("about comp unmount")
    }
  },[])


  return (
    <div className='container'>
      About {val}
      
    </div>
  )
}
