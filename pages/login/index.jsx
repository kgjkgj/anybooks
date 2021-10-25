import React,{useRef,useEffect} from 'react'
import Meta from '../../Meta/Home'
import Cookie  from 'js-cookie'
import {LoginAdmin} from '../../Tools/API/Login/Home'
import {useRouter} from 'next/router'

function Login() {


    const username = useRef();
    const password = useRef();

    const {push}  = useRouter();


    useEffect(()=>{
        const IDAdmin = '616fce9f6d3767e221cf54ad';
        if(IDAdmin === Cookie.get(IDAdmin)){
            push('/login/manager')
        }
    },[])

    async function HandelLogin(e){
        e.preventDefault();
        const data = {
            username:username.current.value,
            password:password.current.value,
        }

        const response = await LoginAdmin(data);
       if(response.data.status === 200){
        Cookie.set(response.data.id,response.data.id,{expires:7});
            push('/login/manager')
       }else{
           alert("Username And Password Error");
       }
    }


    return (
        <div className="Login">
            <Meta title = {'Login'} />
            <p className="title">Login Admin</p>
            <form onSubmit={HandelLogin}>
                <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input ref = {username} type="text" className="form-control form-control-sm" required />
                    <span  className="form-text">We'll never share your email with anyone else.</span>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input ref = {password} type="password" className="form-control form-control-sm" required />
                    <span  className="form-text">We'll never share your email with anyone else.</span>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" defaultChecked />
                    <span className="form-check-label" >Check me out</span>
                </div>
              
                <button className="btn btn-sm">Login</button>
            </form>
        </div>
    )
}

export default Login
