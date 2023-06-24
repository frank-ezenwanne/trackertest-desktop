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
        <div style={{margin:'8%'}} >
            <h3 className='d-flex justify-content-start'>Tasks</h3>
            <ul className='list-group rounded-1'>
                <li onClick = {()=>{navigate('/create-review')}} className='list-group-item list-group-item-action'>
                    <ItemComponent text= 'Create Daily Review' />
                </li>
                
                <li onClick = {()=>{navigate('/review-list')}} className='list-group-item list-group-item-action'>
                    <ItemComponent text= 'View Reviews' />
                </li>

                <li onClick = {()=>{window.indexBridge.loadGmail()}} className='list-group-item list-group-item-action'>
                    <ItemComponent text= 'Gmail' />
                </li>

                <li onClick = {()=>{window.indexBridge.loadSkype()}} className='list-group-item list-group-item-action'>
                    <ItemComponent text= 'Skype' />
                </li>
                            
            </ul>
        </div>
    )
}