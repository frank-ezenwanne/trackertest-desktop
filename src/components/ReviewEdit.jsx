import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {connect} from "react-redux"
import {updateReview} from "../actions/auth"
import { getOneReview } from '../actions/tasks'
import { useNavigate } from 'react-router-dom'

export const UpdateReview = (props) =>{
    const navigate = useNavigate()

    const [review , setReview ] = useState({title:'',content:''})
    onsubmit = (e) => {
        e.preventDefault()
        await props.updateReview(title, content)
            .then(()=>{
                navigate(`/api/getreview/${review.id}`)
            })
    }

    useEffect(()=>{
        await props.getOneReview()
        .then(()=>{
            setReview(props.review)
        })
    },[props.review])


    return(
        <div style =''>
                <h3>Edit a Review</h3>
                <form onSubmit={onsubmit}>
                    <div className='form-group mb-2 '>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input onChange = {this.onchange} name = 'title' value= {review.title} type="text" className="form-control" id="title" placeholder="Enter Title"/>
                    </div>

                    <div className='form-group mb-2 '>
                        <label htmlFor="content" className="form-label">Content</label>
                        <input onChange = {this.onchange} name = 'content' value= {review.content} type="text" className="form-control" id="content" placeholder="Content"/>
                    </div>

                    <div>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>

                {/* <div>
                    <table>
                        <thead>
                            <tr>
                                <td>S/N</td>
                                <td>Title</td>
                                <td>Content</td>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>

                </div>   */}
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
	    review: state.tasks.review
   }
}


export default connect(mapStateToProps,{updateReview,getOneReview})(UpdateReview)


