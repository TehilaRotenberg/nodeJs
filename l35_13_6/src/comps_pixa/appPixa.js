import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PixaItem from './pixaItem';

export default function AppPixa() {
  // מאפשר לי לאסוף פארמס מהיו אר אל
  // /pixa/:searchQ -> params["searchQ"]
  const params = useParams();
  // הוק שמאפשר לי לשגר ידנית לכתובת מקומית
  const nav = useNavigate()
  const [ar, setAr] = useState([]);
  const inpRef = useRef();

  useEffect(() => {
    doApi()
  }, [params["searchQ"]])

  const doApi = async () => {
    let url = `https://pixabay.com/api/?key=27132708-8c54ba3e2fa9897b06f49b52d&q=${params["searchQ"]}&image_type=photo&pretty=true`
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
      setAr(resp.data.hits);

    }
    catch (err) {
      console.log("err");
      alert("There problem")
    }
  }
  // nodejs -> req.params.searchQ

  return (
    <div className='container'>
      <div className='col-md-4 p-3'>
        <input ref={inpRef}  onKeyDown={(e) => {
          if(e.key == "Enter"){
            // console.log(e.target.value);
            // נרצה לשגר ידנית לכתותבת
            //  window.location.href= "/pixa/"+inpRef.current.value;
            nav("/pixa/"+inpRef.current.value);
          }
        }} className='form-control' placeholder='search for pics and press enter...' />
      </div>
      <h2>Search for: {params["searchQ"]}</h2>
      <div className="row g-4">
        {ar.map(item => {
          return (
            <PixaItem key={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}
