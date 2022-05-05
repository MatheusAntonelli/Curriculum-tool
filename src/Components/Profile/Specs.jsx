import React from 'react'
    
export const Specs = ({
    content,
    props,
    title,
    specs
}) => {
    return(
        <div className='container flex'>
            <div className="item">
                <h1>{title}</h1>
            </div>
            <div className="item flex-item-1">
                <h5>{content}</h5>
                <br />
                <h5>{props}</h5>
            </div>

        </div>
    )
}