import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {connect} from "react-redux"
import {fetchReviews} from "../actions/auth"


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
        <div>
            <ul className='list-group rounded-1'>
                {
                    reviewList?.length > 0 ?
                    reviewList.map((review,index)=>(
                        <li onClick = {()=>{navigate(`/api/getreview/${review.id}`)}} className='list-group-item list-group-item-action'>
                            <div>
                                <div>{review?.date}</div>
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