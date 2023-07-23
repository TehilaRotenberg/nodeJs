import React from 'react'

export default function PixaItem(props) {
  let item = props.item;
  return (
    <div className='col-md-4'>
      <div className='border h-100 overflow-hidden'>
        <img src={item.previewURL} alt={item.tags} className="w-50 float-start me-2"  />
        <h4>Tags:{item.tags}</h4>
        <div>Views:{item.views}</div>
      </div>

    </div>
  )
}
