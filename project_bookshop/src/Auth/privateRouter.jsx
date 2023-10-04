import {Admin} from "../admin/components/Admin";
import { Navigate } from "react-router-dom";

const privateRouter=()=>{
    const isAuth=localStorage.getItem('isLogin');
    if(isAuth){
        return <Admin/>
    }else{
        return <Navigate to='/login' replace/>
    }
}
export default privateRouter;