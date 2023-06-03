import React from 'react'
// PropTypes from 'prop-types';

export const GifGridItems = ({id, title, url}) => {
    return (
    <div className='animate__animated animate__bounce animate__delay-2s'>
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}
