import {
   ALL_REVIEWS_FETCHED,
   REVIEW_UPDATED,
   REVIEW_RETRIEVED,
   REVIEW_POSTED,      
   ALL_STATS_FETCHED ,
   PLAN_UPDATED,
   ALL_PLANS_FETCHED,
   PLAN_POSTED,
   PLAN_RETRIEVED,  
   STAT_POSTED,
   ALL_CLICKS_FETCHED,
}

from '../actions/types'

const initialState = {
    reviews: '',
    review:'',
    timers:'',
    stats:'',
    onestat:'',
    plan:'',
    plans:'',
    reviewUpdated:false

}

export default function(state=initialState,action){
    switch(action.type){
        case ALL_REVIEWS_FETCHED:
            return{
                ...state,
                reviews:action.payload.reviews
            }

        case REVIEW_UPDATED:
        case REVIEW_POSTED:
            return {
                ...state,
                review:action.payload.review,
                reviewUpdated:true
            }

        case REVIEW_RETRIEVED:
            return{
                ...state,
                review:action.payload.review,
                reviewUpdated:false
            }

        case ALL_STATS_FETCHED:
            return {
                ...state,
                timers:action.payload.timers
            }
        
        case STAT_POSTED:
            return {
                ...state,
                onestat:action.payload.onestat
            }

        case ALL_CLICKS_FETCHED:
            return {
                ...state,
                stats:action.payload.stats
            }

            case ALL_REVIEWS_FETCHED:
                return{
                    ...state,
                    reviews:action.payload.reviews
                }
    
        case PLAN_UPDATED:
        case PLAN_POSTED:
        case PLAN_RETRIEVED:
            return {
                ...state,
                plan:action.payload.plan
            }

        case ALL_PLANS_FETCHED:
            return {
                ...state,
                plans:action.payload.plans
            }

        default:
            return state

        
    }
}