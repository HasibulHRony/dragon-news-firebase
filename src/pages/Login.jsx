import React, { use } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'

export const Login = () => {
    const { logIn } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)
    const handleLogIn = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log({email, password})
        logIn(email, password)
        .then((res)=>{
            console.log(res.user)
            navigate(`${location.state ? location.state : '/'}`)
        })
        .catch((error)=>console.log(error))
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogIn}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <p className='font-semibold text-center pt-5'>Don't Have An Account? <Link to={'/auth/register'} className='text-secondary'>Register</Link></p>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
