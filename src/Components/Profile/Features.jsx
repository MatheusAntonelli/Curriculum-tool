import React from 'react'

export const Features = ({
    content,
    props,
    title
}) => {
    return(
        <div className='container flex'>
            <div className="item">
                <h1>{title}</h1>
            </div>
            <div className="item flex-item-1">
                <p>{content}</p> 

            </div>
        </div>
    )
}