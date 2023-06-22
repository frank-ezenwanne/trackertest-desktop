import React,{Component} from "react"
import {Link,Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from "../../actions/auth.js"



class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }

    static propTypes = {
        login:PropTypes.func,
        justregistered:PropTypes.bool

    }

    
    onchange = (e) => {
        this.setState({...this.state,
            [e.target.name] : e.target.value
        })
    }

    onsubmit = (e) => {
        e.preventDefault()
        const {email, password } = this.state
        this.props.login(email, password)
    }


    render(){
            if(this.props.isAuthenticated){
           return <Navigate to = "/tasks" />
         }
         if(this.props.user_active === false){ //false means logged in but not fully active unlike no_value which means not logged in at all
             return <Navigate to = '/verifytoken' />
         }
       const {email, password } = this.state
       const justverified_div = (<div className='mb-3 text-white' align="center" id="message">Your account has been 
       successfully activated..You can now login</div>)

        return (
            <div style ={{'backgroundColor':'rgb(245,245,245)','marginTop':'10%','marginLeft':'35%','marginRight':'35%'}} className=' card border border-4 border-success d-flex justify-content-center'>
            <form onSubmit = {this.onsubmit} className="p-4">
            <h3 className='mb-3'>Login</h3>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>

                <button type="submit" className="btn btn-success">Sign in</button>
                
                <div id ="login-bottom-options">
                    <div className="reg-link"> Not yet registered? <Link to ="/register">Register</Link> 
                    </div>

                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    justregistered:state.auth.justregistered,
    isAuthenticated : state.auth.isAuthenticated,
    justverified:state.auth.justverified,
    user_active:state.auth.user_active
})

export default connect(mapStateToProps,{login})(Login)