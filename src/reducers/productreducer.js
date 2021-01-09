import {productContant} from '../constant/Product'
import {status} from '../constant/commonDS'


let inintalState = {
    product:null
}


export default(state=inintalState,action)=>{
    switch(action.type){
        case productContant.PRODUCT_REQUEST_ACTION:
            return{
                state,
                product_request_status:status.REQUEST,
                product:action.data
            }
        case productContant.PRODUCT_SUCCESS_ACTION:
            return{
                state,
                product_success_status:status.SUCCESS,
                product:action.data
            }
        case productContant.PRODUCT_ERROR_ACTION:
            return {
                state,
                product:null
            }

        default:
            return{
                state
            }

    }
}