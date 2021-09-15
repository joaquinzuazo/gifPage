import React from 'react'

function GifGridItem({title, id, image}) {
    return (
        <div className='card animate__fadeIn'>
            <img src={image} alt={image} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
