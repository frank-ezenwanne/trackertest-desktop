import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {updateReview, getOneReview} from "../actions/tasks"
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateReview = (props) =>{
    const {id} = useParams()
    const navigate = useNavigate()
    const [review , setReview ] = useState({title:'',content:''})

    const onsubmit = (e) => {
        e.preventDefault()
        props.updateReview(id, review.title, review.content)
        }

    const onchange = (e) => {
        setReview({...review,
            [e.target.name] : e.target.value
        })
    }
    
    

    useEffect(()=>{
        props.getOneReview(id)
    },[])

    useEffect(()=>{
        setReview(props.review)
    },[props.review])

    useEffect(()=>{
        if(props.reviewUpdated === true){
            navigate(`/review-detail/${id}`)
        }
    },[props.reviewUpdated])


    return(
        <div className = 'w-75' style ={{marginLeft:'5%',marginTop:'10%'}}>
                <h3>Edit a Review</h3>
                <form onSubmit={onsubmit} className='p-3'>
                    <div className='form-group mb-2 '>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input onChange = {onchange} name = 'title' value= {review.title} type="text" className="form-control" id="title" placeholder="Enter Title"/>
                    </div>

                    <div className='form-group mb-2 '>
                        <label htmlFor="content" className="form-label">Content</label>
                        <input onChange = {onchange} name = 'content' value= {review.content} type="text" className="form-control" id="content" placeholder="Content"/>
                    </div>

                    <div>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>

        </div>
    )
}

const mapStateToProps = (state) => {
	return {
	    review: state.tasks.review,
        reviewUpdated:state.tasks.reviewUpdated
   }
}


export default connect(mapStateToProps,{updateReview,getOneReview})(UpdateReview)


