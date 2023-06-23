import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {getOneReview} from "../actions/auth"

export const ReviewDetail = (props) =>{
    const [review , setReview ] = useState([])

    useEffect(()=>{
        await props.getOneReview()
            .then(()=>{
                setReview(props.review)
            })
    },[])
  
    return(
        <div className='list-group-item list-group-item-action'>
                <div className='d-flex justify-content-between'>
                    <div>{review?.date}</div>
                    <div className='btn btn-sm btn-success'>Edit</div>
                </div>
                <div>{review?.title}</div>
                <div>{review?.content}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
	    review: state.tasks.review
   }
}
export default connect(mapStateToProps,{getOneReview})(ReviewDetail)
