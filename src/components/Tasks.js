import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const ItemComponent = (props)=>{
    return(
        <span className='cursor-pointer'>
            {props.text}

            <hr className='text-neut400'/>
        </span>
        
    )
}

export const Tasks = () => {
    const navigate = useNavigate()
    return(
        <div className='m-4'>
            <h3 className='d-flex justify-content-start'>Tasks</h3>
            <ul className='list-group rounded-1'>
                <li onClick = {()=>{navigate('/create-review')}} className='list-group-item list-group-item-action'>
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