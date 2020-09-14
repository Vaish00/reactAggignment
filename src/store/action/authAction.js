/**
 * we write the fucntions which return type and payload
 */
import API from "../../components/utils/api";
export const login = (email, password) => {

    console.log('auth action', email,password)

    return (dispatch) =>{
                API.login(email,password,res=>{
                    console.log('result',res)
                })
    }
    // return {
    //     type: 'LOGIN',
    //     payload: { email, password }
    // }
}

export const signup = (value) => {
    return (dispatch) =>{
        API.signup(value,res=>{
            console.log('result',res)
        })
}
    // return {
    //     type: 'REGISTER',
    //     payload: { value }
    // }
}