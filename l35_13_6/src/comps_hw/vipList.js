import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VipItem from './vipItem';

export default function VipList() {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = "https://expressrichpepole.onrender.com"
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
      setAr(resp.data);
    }
    catch (err) {
      console.log(err)
      alert("There problem, come back later")
    }
  }

  return (
    <div className='container'>
      <h2>List of VIP:</h2>
      <div className="row g-2">
        {ar.map(item => {
          return (
            <VipItem key={item.id} item={item} />
          )
        })}
        {ar.length < 1 && <h2>Loading...</h2>}
        {/* רק במידה ואורך המערך קטן מ1 רו שווה ל0 תציג טעינה */}
      </div>
    </div>
    // אלט שיפט אף מסדר את הקוד

  )
}
