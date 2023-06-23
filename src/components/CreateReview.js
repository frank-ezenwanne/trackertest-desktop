import React, {useState, useEffect} from 'react'

export const CreateReview = () =>{

    
    useEffect(()=>{

    })
    return(
        <div style =''>
                <h3>Write a Review</h3>
                <form>
                    <div className='form-group mb-2 '>
                        <label htmlFor="title" className="form-label">Title</label>
                        <input onChange = {this.onchange} name = 'title' value= {title} type="text" className="form-control" id="title" placeholder="Enter Title"/>
                    </div>

                    <div className='form-group mb-2 '>
                        <label htmlFor="content" className="form-label">Content</label>
                        <input onChange = {this.onchange} name = 'content' value= {content} type="text" className="form-control" id="content" placeholder="Content"/>
                    </div>

                    <div>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>

                <div>
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

                </div>  
        </div>
    )
}

