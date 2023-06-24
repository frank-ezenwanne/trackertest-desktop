import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {getOneReview} from "../actions/tasks"
import { useParams, useNavigate } from 'react-router-dom'
import Moment from 'react-moment'
import moment from 'moment';

export const ReviewDetail = (props) =>{
      
    const navigate = useNavigate()
    const {id} = useParams()

    const [review , setReview ] = useState([])

    useEffect(()=>{
        props.getOneReview(id)
    },[])

    useEffect(()=>{
        setReview(props.review)
    },[props.review])
  
    return(
        <ul className='list-group rounded-1'>
            <li style={{marginLeft:'5%',marginTop:'10%',backgroundColor:'rgb(248,248,248'}}  className='w-75 list-group-item list-group-item-action'>
                    <div className='d-flex justify-content-between'>
                        <div><Moment format="LLL">
                                {review?.date}
                            </Moment>
                        </div> 
                        <div onClick = {()=>{navigate(`/review-edit/${id}`)}} className='btn btn-sm btn-success'>Edit</div>
                    </div>
                    <div>{review?.title}</div>
                    <div>{review?.content}</div>
            </li>
        </ul>
    )
}

const mapStateToProps = (state) => {
	return {
	    review: state.tasks.review
   }
}
export default connect(mapStateToProps,{getOneReview})(ReviewDetail)
