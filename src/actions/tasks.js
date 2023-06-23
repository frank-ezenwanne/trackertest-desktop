

let back_url = 'http://localhost:8000/'

export const fetchReviews = () =>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }

    axios
    .get(back_url +'api/dailyreview/',null,config)
    .then((res)=>{
        dispatch({
            type:ALL_REVIEWS_FETCHED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Review ReTrieved'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}


export const getOneReview = (pk) =>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`  
    }
    axios
    .get(back_url +`api/getreview/${pk}`,null,config)
    .then((res)=>{
        dispatch({
            type:REVIEW_RETRIEVED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Review Rerieved'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}

export const postReview = (title,content)=>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    const body = JSON.stringify({title,content}) 
    axios
    .post(back_url +'api/dailyreview/',body,config)   
    .then((res)=>{
        dispatch({
            type:REVIEW_POSTED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Review Posted'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}

export const updateReview = (pk,title,content)=>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    const body = JSON.stringify({title,content}) 
    axios
    .post(back_url +`api/updatereview/${pk}`,body,config)   
    .then((res)=>{                                       
        dispatch({
            type:REVIEW_UPDATED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Review Updated'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}

//DAILY PLAN ACTIONS

export const fetchPlans = () =>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }

    axios
    .get(back_url +'api/dailyplan/',null,config)
    .then((res)=>{
        dispatch({
            type:ALL_PLANS_FETCHED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Plans Retrieved'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}


export const getOnePlan = (pk) =>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    axios
    .get(back_url +`api/dailyplan/${pk}`,null,config)  
    .then((res)=>{
        dispatch({
            type:PLAN_RETRIEVED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Plan Retrieved'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}

export const postPlan = (tasks_num,complete_hrs)=>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    const body = JSON.stringify({tasks_num,complete_hrs}) 
    axios
    .post(back_url +'api/dailyplan/',body,config)   
    .then((res)=>{
        dispatch({
            type:PLAN_POSTED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Plan Posted'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}

export const updatePlan = (pk,tasks_num,complete_hrs)=>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    const body = JSON.stringify({tasks_num,complete_hrs}) 
    axios
    .post(back_url +`api/updateplan/${pk}`,body,config)   
    .then((res)=>{
        dispatch({
            type:PLAN_UPDATED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Plan Updated'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}

//STAT ACTIONS
export const fetchStats = () =>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }

    axios
    .get(back_url +'api/stats/',null,config)  
    .then((res)=>{
        dispatch({
            type:ALL_STATS_FETCHED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Stats Retrieved'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}


export const postStat = (activity,time,keyboard_taps,clicked_submit,clicked_box)=>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    const body = JSON.stringify({activity,time,keyboard_taps,clicked_submit,clicked_box}) 
    axios
    .post(back_url +'api/stats/',body,config)
    .then((res)=>{
        dispatch({
            type:STAT_POSTED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Stat Posted'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}



export const fetchClicks = () =>(dispatch)=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    const token = getState().auth.token
    if(token) {
        config.headers["Authorization"] = `Token ${token}`
    }

    axios
    .get(back_url +'api/statsclick/',null,config)  
    .then((res)=>{
        dispatch({
            type:ALL_CLICKS_FETCHED,
            payload:res.data
        })
        dispatch(createMessage({msg:'Click data Retrieved'}))
    })
    .catch(
        (err) => {
            dispatch(returnErrors(err.response.data,err.response.status))
        }
    )
}