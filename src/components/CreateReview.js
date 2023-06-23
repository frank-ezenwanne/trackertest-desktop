import React, {useState} from 'react'
import {connect} from "react-redux"
import {postReview} from "../actions/tasks"

export const CreateReview = (props) =>{
    
   const [review , setReview ] = useState({title:'',content:''})
   console.log(props.postReview,9908)
   const onsubmit = (e) => {
        e.preventDefault()
        console.log(postReview,998)
        props.postReview(review.title, review.content)
    }

    const onchange = (e) => {
        setReview({...review,
            [e.target.name] : e.target.value
        })
    }
    
    return(
        <div style= {{backgroundColor:'silver',marginTop:'10%'}} className=' card w-75 ms-4'>
                <h3>Write a Review</h3>
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


export default connect(null,{postReview})(CreateReview)

