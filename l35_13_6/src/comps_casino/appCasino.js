import React, { useState,useContext } from 'react'
import { random } from "lodash";

import { AppContext } from '../context/context';

export default function AppCasino() {
  const {coins,setCoins} = useContext(AppContext);
  const [num, setNum] = useState(1)
  const [msg,setMsg] = useState("click to start")
  const dice_ar = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"];


  const onRollClick = () => {
    if(coins == 0){
      return alert("Go to the bank bring money")
    }
    setCoins(coins-1)
    setMsg("You lose")
    let rnd = random(0,5);
    setNum(rnd);
    if(rnd >= 4){
      setCoins(coins+1)
      setMsg("You win!")
    }
  }

  return (
    <div className='container col-md-4 mx-auto py-4 border'>
      <img src={"/images/" + dice_ar[num]} alt="dice" className='w-25' />
      <div>
        <button onClick={onRollClick}>Roll dice</button>
        <h2>{msg}</h2>
      </div>
    </div>
  )
}
