import React, {useState, useEffect} from 'react'

const ItemComponent = (props)=>{
    return(
        <span className='cursor-pointer'>
            {props.text}

            <hr className='text-neut400'/>
        </span>
        
    )
}

export const Tasks = () => {
    return(
        <div className='m-4'>
            <h3 className='d-flex justify-content-start'>Tasks</h3>
            <ul className='list-group rounded-1'>
                <li className='list-group-item list-group-item-action'>
                    <ItemComponent text= 'Create Daily Review' />
                </li>
                
                <li className='list-group-item list-group-item-action'>
                    <ItemComponent text= 'Daily Proposal' />
                </li>

                <li className='list-group-item list-group-item-action'>
                    <ItemComponent text= 'Gmail' />
                </li>

                <li className='list-group-item list-group-item-action'>
                    <ItemComponent text= 'Skype' />
                </li>
                            
            </ul>
        </div>
    )
}