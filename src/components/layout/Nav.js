import React, {Fragment,useState,useRef} from "react"
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import {logout} from "../../actions/auth"


function Nav(props){
    const [linecolor,setLinesColor] = useState("")
    const transbar_linenav = useRef()
    const transbar_sidebar = useRef()

    const lines_white_internal = {
        backgroundColor:linecolor
    }

    const side_bar_active = {
        transform:'translateX(0%)'
    }

	const logout_func = (e) => {
		props.logout()
	}

	const mouseOver= (e) => {
		setLinesColor("white")
        
	}

    const mouseOut= (e) => {
		setLinesColor("rgb(210,210,210)")
        
	}

    const transbar = () => {
        transbar_linenav.current.classList.toggle("toggle")
        transbar_sidebar.current.classList.toggle("side-bar-active")
    }
     
    const lines = ["line1","line2","line3"]
        return ( 
			<div style= {{fontSize:'85%'}}>
				<nav>
					<div onClick = {transbar} onMouseOver={mouseOver} onMouseOut = {mouseOut} ref = {transbar_linenav} className = "line-nav">
                       {lines.map((line,key) =>{
                        return(
                        <div key = {key} style = {lines_white_internal} className = {line +" "+ "line"} ></div>)})}
                    </div>

					<div id="nav-items-section">
						{
                            props.isAuthenticated === false?
                            <div id="nav-main-name">
							<span className ="nav-bar-gamersblog">
								<Link to = "/">
									<span id= "navbar-name1">Upgrade</span>
									<span id= "navbar-name2">Profits</span>
								</Link>
							</span>
						    </div>:
                            <div className="d-flex justify-content-between">
                                <div id="nav-main-name">
                                    <span className ="nav-bar-gamersblog">
                                        <Link to = "/">
                                            <span id= "navbar-name1">Upgrade</span>
                                            <span id= "navbar-name2">Profits</span>
                                        </Link>
                                    </span>
						        </div>

                                <div>Time</div>
                            </div>
                        }


					</div>
					
				</nav>
				
			
				<div ref = {transbar_sidebar} className = "side-bar">
					{props.isAuthenticated?<Fragment>
					<div className = "side-bar-combo">
						<span className = "side-bar-email">{props.email}</span>
						<span className="lower-side-bar "><Link style = {{textDecoration:'none',color:'white'}} to ='/tasks'>Tasks</Link></span>
						<span className = "lower-side-bar"><Link style = {{textDecoration:'none',color:'white'}} to ='/time'>Time</Link></span>
						<span className = "lower-side-bar"><Link style = {{textDecoration:'none',color:'white'}} to ='/stats'>Stats</Link></span>
						<span onClick = {()=>{props.logout()}} className = "text-white lower-side-bar">Logout</span>
					</div>
					</Fragment>:
					<Fragment>
					<div className = "side-bar-combo">
						<span className = "lower-side-bar"><Link style = {{textDecoration:'none',color:'white'}} to ='/login'>Login</Link></span>
						<span className = "lower-side-bar"><Link style = {{textDecoration:'none',color:'white'}} to ='/register'>Register</Link></span>
						
					</div>
					</Fragment>
					 }
					
				</div>

		
                
			</div>
	
		
        )
    }



const mapStateToProps = (state) => {
	return {
	isAuthenticated : state.auth.isAuthenticated,
	email:state.auth.user.email }
}

export default connect(mapStateToProps,{logout})(Nav)

