import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import CarItem from './carItem';

export default function CarsList() {
  const [ar, setAr] = useState([]);
  const nav = useNavigate();
  const inpRef = useRef();
  // איסוף קווארי סטרינג
  // ?s=
  const [query] = useSearchParams();

  useEffect(() => {
    doApi();
  }, [query])

  const doApi = async () => {
    let searchQ = query.get("s") || "jeep";
    let url = "https://cars-otdf.onrender.com/cars/search?s=" + searchQ;
    let resp = await axios.get(url);
    console.log(resp.data);
    console.log(searchQ);
    setAr(resp.data);

  }


  return (
    <div className='container'>
      <div className='col-md-4 p-3'>
        <input ref={inpRef} onKeyDown={(e) => {
          if (e.key == "Enter") {
            // נרצה לשגר ידנית לכתותבת
            //  window.location.href= "/pixa/"+inpRef.current.value;
            nav("/cars/?s=" + inpRef.current.value);
          }
        }} className='form-control' placeholder='search for cars and press enter...' />
      </div>

      <h2>Cars list: {query.get("s")}</h2>
      <div className="row">
        {ar.map(item => {
          return (
            <CarItem key={item._id} item={item} />
          )
        })}
      </div>
    </div>
  )
}

// להמשיך בחמישי קזינו וקונטקסט
