import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {connect} from "react-redux"
import {postReview} from "../actions/tasks"

export const CreateReview = (props) =>{

    const [review , setReview ] = useState({title:'',content:''})
    onsubmit = (e) => {
        e.preventDefault()
        props.postReview(review.title, review.content)
    }

    
    return(
        <div style =''>
                <h3>Write a Review</h3>
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


export default connect(null,{postReview})(CreateReview)


