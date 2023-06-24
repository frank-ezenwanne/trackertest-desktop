import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"
import {postReview} from "../actions/tasks"
import { useNavigate } from 'react-router-dom'

export const CreateReview = (props) =>{
   const [review , setReview ] = useState({title:'',content:''})
   const navigate = useNavigate()

   const onsubmit = (e) => {
        e.preventDefault()
        props.postReview(review.title, review.content)
    }

    const onchange = (e) => {
        setReview({...review,
            [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        if(props.reviewUpdated === true){
            navigate(`/review-detail/${props.review.id}`)
        }
    },[props.reviewUpdated])
    
    return(
        <div style= {{backgroundColor:'rgb(245,245,245)',marginTop:'10%'}} className=' card w-75 ms-4'>
                <h3 className='text-success'>Write a Review</h3>
                <form className= 'p-4' onSubmit={onsubmit}>
                    <div className='form-group mb-2 '>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input onChange = {onchange} name = 'title' value= {review.title} type="text" className=" w-75 form-control" id="title" placeholder="Enter Title"/>
                    </div>

                    <div className='form-group mb-2 '>
                        <label htmlFor="content" className="form-label">Content</label>
                        <input onChange = {onchange} name = 'content' value= {review.content} type="text" className="w-75 form-control" id="content" placeholder="Content"/>
                    </div>

                    <div>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>

        </div>
    )
}

const mapStateToProps = (state) => ({
    review:state.tasks.review,
    reviewUpdated:state.tasks.reviewUpdated
})

export default connect(mapStateToProps,{postReview})(CreateReview)



