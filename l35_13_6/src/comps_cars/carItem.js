import React from 'react'

export default function CarItem(props) {
  let item = props.item
  return (
    <div className='col-md-8 p-2 my-2 shadow overflow-hidden'>
      <img src={item.img_url} alt="car" className='w-25 float-end me-2' />
      <h2>{item.company} {item.model}</h2>
      <div>Price:{item.price}</div>
      <div>Year:{item.year}</div>
    </div>
  )
}
