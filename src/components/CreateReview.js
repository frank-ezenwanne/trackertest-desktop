import React, {useState, useEffect} from 'react'

export const CreateReview = () =>{
    return(
        <div>
            <div>
                <form>
                    <div className='form-group mb-2 '>
                        <label for = "title">
                            <input type = 'text' id ='title' className='form-control'/>
                        </label>
                    </div>

                    <div className='form-group mb-2'>
                        <label for = "content">
                            <input type = 'text' id ='content' className='form-control'/>
                        </label>
                    </div>

                    <div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

