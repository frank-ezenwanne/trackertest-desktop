import React, { useEffect,Component, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { verifytoken, resend_token } from "../../actions/auth.js"


const VerifyToken = (props) =>{

    const navigate = useNavigate()

    const [token, setToken] = useState("")

    const onchange = (e) => {
        setToken(e.target.value)
    }

    const onsubmit = (e) => {
        e.preventDefault()
        props.verifytoken(props.user.email, token)
    }

    const resend_token = (e) => {
        e.preventDefault()
        props.resend_token(props.user.email)
    } 

    useEffect(()=>{
        if (props.isAuthenticated) {
            navigate('/tasks')
        }
        if (props.justverified || !props.user.email) {
            navigate('/')
        }

    },[props])

        return (
            <div style ={{'backgroundColor':'rgb(245,245,245)','marginTop':'10%','marginLeft':'35%','marginRight':'35%'}} className=' card border border-4 border-success d-flex justify-content-center'>
                <h3 className='text-black login-heading'> Account Activation </h3>
                {props.token_resent ? <div className='text-primary'>New Token Sent!</div> : null}
                <form className ='p-3' onSubmit={onsubmit} >
                    <div className='form-field'>
                        <div>
                            <label className='text-black ' htmlFor="token">Enter Token from email </label>
                        </div>
                        <input className='form-control'
                            id='token'
                            type='text'
                            name='token'
                            placeholder=' Token from email'
                            onChange={onchange}
                            value={token}
                        /><br />
                    </div>

                    <button type="submit" className='btn btn-success'>Activate</button>

                    <div id="login-bottom-options">
                        <div className="reg-link"><Link to="/emailchange"> Change Email? ({props.user.email}) </Link> </div>
                        <div onClick={resend_token} className="fs-9 clickable reg-link"> Re-request Token?</div>

                    </div>
                    
                </form>
            </div>
        )
    }


const mapStateToProps = (state) => ({
    user: state.auth.user,
    justregistered: state.auth.justregistered,
    justverified: state.auth.justverified,
    isAuthenticated: state.auth.isAuthenticated,
    token_resent: state.auth.token_resent
})

export default connect(mapStateToProps, { verifytoken, resend_token })(VerifyToken)