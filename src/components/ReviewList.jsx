import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {connect} from "react-redux"
import {fetchReviews} from "../actions/tasks"
import Moment from 'react-moment'
import moment from 'moment';


export const ReviewList = (props) =>{

    const [reviewList , setReviewList ] = useState([])
    useEffect(()=>{
        props.fetchReviews()
    },[])

    useEffect(()=>{
        setReviewList(props.reviews)
    },[props.reviews])

  
    const navigate = useNavigate()
    return(
        <div className = 'w-75' style={{marginLeft:'5%',marginTop:'10%'}}>
            <ul className='list-group rounded-1'>
                <h3>All Reviews</h3>
                {
                    reviewList?.length > 0 ?
                    reviewList.map((review,index)=>(
                        <li key={index} onClick = {()=>{navigate(`/review-detail/${review.id}`)}} className='list-group-item list-group-item-action'>
                            <div>
                                <div className='mb-2'><Moment format="LLL">
                                    {review?.date}
                                </Moment></div>
                            </div>
                            <div>{review?.title}</div>
                            <div>{review?.content}</div>
                        </li>
                    )):
                    <li className='list-group-item list-group-item-action'>
                        <div>Nothing Yet</div>
                    </li>
                    
                }
        
            </ul>            
        </div>
    )
}

const mapStateToProps = (state) => ({
    reviews:state.tasks.reviews,
})

export default connect(mapStateToProps,{fetchReviews})(ReviewList)