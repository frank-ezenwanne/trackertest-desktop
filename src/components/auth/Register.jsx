import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { register } from "../../actions/auth.js"
import PropTypes from "prop-types"
import { Link, Navigate } from "react-router-dom"

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
           
        }
    }
 

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }


    onchange = (e) => {
        this.setState({...this.state,
            [e.target.name]: e.target.value
        })
    }

    onsubmit = (e) => {
        e.preventDefault()
        const {email, password, password2} = this.state
        if (password === password2) {
            const newUser = {
                password,
                email,
            }
            this.props.register( password, email)
        }else{
            alert('Passwords do not match')
        }
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Navigate to="/" />
        }

        if (this.props.justverified ===true ) {
            return <Navigate to = "/login"/>
        }

        if (this.props.justregistered) {
            return <Navigate to = '/verifytoken'/>
        }
    
        if(this.props.token_sent === 'success'){
            return <Navigate to = '/verifytoken'/>
        }

        if(this.props.token_sent === 'failed'){
            return <Navigate to = '/emailsetting'/>
        }
       
        const { email, password, password2, } = this.state
        return (
            <div style ={{'backgroundColor':'rgb(245,245,245)','marginTop':'10%','marginLeft':'35%','marginRight':'35%'}} className=' card border border-4 border-success d-flex justify-content-center margin-auto '>
            <form onSubmit = {this.onsubmit} className="p-4">
            <h3 className='mb-3'>Register</h3>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange = {this.onchange} value= {email} name= 'email' type="email" className="form-control" id="email" placeholder="Enter Email"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange = {this.onchange} value= {password} name = 'password' type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Confirm Password</label>
                        <input onChange = {this.onchange} value= {password2} name = 'password2' type="password" className="form-control" id="password2" placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-success">Register</button>
                    <div id ="login-bottom-options">
                        <div className="reg-link"> Already Signed up? <Link to ="/">Login</Link> 
                    </div>

                </div>
                </form>
           </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    justregistered : state.auth.justregistered
})

export default connect(mapStateToProps, { register })(Register)