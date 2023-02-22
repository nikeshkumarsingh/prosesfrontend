import { Routes ,Route} from "react-router-dom"
import { UpdateUser } from "./Updateuser"
import { UserBox } from "./userBox"

export const Allroutes=()=>{

    return(
        <Routes>
            <Route path="/" element={<UserBox/>}></Route>
            <Route path="/user" element={<UpdateUser/>}></Route>
        </Routes>
    )
}